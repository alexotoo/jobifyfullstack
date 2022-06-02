import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customAPI.js";

class unAuthError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default unAuthError;
