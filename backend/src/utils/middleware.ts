import {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
  RequestHandler
} from "express";
import logger from "./logger";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/User.model";
import config from "./config";
import mongoose from "mongoose";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      userId: mongoose.Types.ObjectId;
      username: string;
    };
  }
}

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  logger.error(error.message);
  console.error(error.message);
  console.error(error.name);

  let customError = {
    statusCode: error.statusCode || 500,
    msg: error.message || "Something went wrong. Try again later"
  };

  if (error.name === "CastError") {
    customError.msg = "malformatted id";
    customError.statusCode = 400;
  } else if (error.name === "ValidationError") {
    customError.msg = error.message;
    customError.statusCode = 400;
  } else if (error.name === "MongoServerError") {
    if (error.message.includes("E11000 duplicate key error")) {
      const duplicateField = Object.keys(error.keyValue)[0];
      customError.msg = `Duplicate key error: The ${duplicateField} already exists`;
      customError.statusCode = 400;
    }
  }

  return res.status(customError.statusCode).json({ message: customError.msg });
};

const notFound = (request: Request, response: Response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const requestLogger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const userExtractor: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    logger.info("No authorization header provided");
    return res.status(401).json({ error: "No token provided" });
  }
  const token = authHeader.split(" ")[1];

  const decodedToken = jwt.verify(token, config.JWT_SECRET_KEY) as JwtPayload;
  if (!decodedToken.userId) {
    logger.info("Invalid token, missing userId");
    return res.status(401).json({ error: "Invalid token" });
  }

  const user = await User.findById(decodedToken.userId);
  if (!user) {
    logger.info("No user found with id:", decodedToken.userId);
    return res.status(404).json({ error: "User not found" });
  }

  req.user = {
    username: user.username,
    userId: user._id as mongoose.Types.ObjectId
  };

  next();
};

export default {
  errorHandler,
  notFound,
  requestLogger,
  userExtractor
};
