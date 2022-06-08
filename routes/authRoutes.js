import express from "express";
const router = express.Router();

import { register, login, updateUser } from "../controllers/authController.js";
import authUser from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authUser, updateUser);

export default router;
