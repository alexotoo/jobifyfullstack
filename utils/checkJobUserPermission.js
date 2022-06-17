import { unAuthError } from "../errors/index.js";

const checkJobUserPermission = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new unAuthError("Not authorized to access this route");
};

export default checkJobUserPermission;
