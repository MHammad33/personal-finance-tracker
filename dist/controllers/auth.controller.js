"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = __importDefault(require("../models/User.model"));
const unauthenticated_error_1 = __importDefault(require("../error/unauthenticated.error"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const userToCreate = { username, email, password };
    const newUser = new User_model_1.default(userToCreate);
    yield newUser.save();
    res.status(201).json({ message: "User registered successfully" });
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const userFound = yield User_model_1.default.findOne({ email });
    if (!userFound)
        return handleAuthError(res);
    const isPasswordValid = yield userFound.comparePassword(password);
    if (!isPasswordValid)
        return handleAuthError(res);
    const token = userFound.createJWT();
    res.status(200).json({ token, username: userFound.username });
});
const handleAuthError = (res) => {
    throw new unauthenticated_error_1.default("Invalid username or password");
};
exports.default = {
    login,
    register
};
//# sourceMappingURL=auth.controller.js.map