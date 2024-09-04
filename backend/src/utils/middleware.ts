import { NextFunction, Request, Response } from "express";
import logger from "./logger";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error.message);
  console.error(error.message);
  console.error(error.name);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  } else if (
    error.name === "MongoServerError" &&
    error.message.includes("E11000 duplicate key error")
  ) {
    return res.status(400).json({ error: "expected `username` to be unique" });
  }

  next(error);
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
