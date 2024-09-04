import { Router } from "express";
import authController from "../controllers/auth.controller";

const authRouter = Router();

// Route - /api/v1/auth
authRouter.route("/login").post(authController.login);
authRouter.route("/register").post(authController.register);

export default authRouter;
