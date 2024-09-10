import { StatusCodes } from "http-status-codes";
import CustomApiError from "./custom-api.error";

class UnauthenticatedError extends CustomApiError {
  public statusCode?: number;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;
