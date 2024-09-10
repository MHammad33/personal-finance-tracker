import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import logger from "./logger";

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
export default {
  errorHandler,
  notFound,
  requestLogger
};
