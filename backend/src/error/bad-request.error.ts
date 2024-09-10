import { StatusCodes } from "http-status-codes";
import CustomApiError from "./custom-api.error";

class BadRequestError extends CustomApiError {
  public statusCode?: number;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
