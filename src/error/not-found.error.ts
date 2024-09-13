import { StatusCodes } from "http-status-codes";
import CustomApiError from "./custom-api.error";

class NotFoundError extends CustomApiError {
  public statusCode?: number;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
