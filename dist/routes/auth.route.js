"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const authRouter = (0, express_1.Router)();
// Route - /api/v1/auth
authRouter.route("/login").post(auth_controller_1.default.login);
authRouter.route("/register").post(auth_controller_1.default.register);
exports.default = authRouter;
