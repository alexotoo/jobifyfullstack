import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customAPI.js";

class unAuthError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default unAuthError;
