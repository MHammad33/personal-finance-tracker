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
const logger_1 = __importDefault(require("./logger"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_model_1 = __importDefault(require("../models/User.model"));
const config_1 = __importDefault(require("./config"));
const not_found_error_1 = __importDefault(require("../error/not-found.error"));
const errorHandler = (error, req, res, next) => {
    logger_1.default.error(error.message);
    console.error(error.message);
    console.error(error.name);
    let customError = {
        statusCode: error.statusCode || 500,
        msg: error.message || "Something went wrong. Try again later"
    };
    if (error.name === "CastError") {
        customError.msg = "malformatted id";
        customError.statusCode = 400;
    }
    else if (error.name === "ValidationError") {
        customError.msg = error.message;
        customError.statusCode = 400;
    }
    else if (error.name === "MongoServerError") {
        if (error.message.includes("E11000 duplicate key error")) {
            const duplicateField = Object.keys(error.keyValue)[0];
            customError.msg = `Duplicate key error: The ${duplicateField} already exists`;
            customError.statusCode = 400;
        }
    }
    return res.status(customError.statusCode).json({ message: customError.msg });
};
const notFound = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
};
const requestLogger = (request, response, next) => {
    logger_1.default.info("Method:", request.method);
    logger_1.default.info("Path:  ", request.path);
    logger_1.default.info("Body:  ", request.body);
    logger_1.default.info("---");
    next();
};
const userExtractor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        logger_1.default.info("No authorization header provided");
        return res.status(401).json({ error: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    const decodedToken = jsonwebtoken_1.default.verify(token, config_1.default.JWT_SECRET_KEY);
    if (!decodedToken.userId) {
        logger_1.default.info("Invalid token, missing userId");
        return res.status(401).json({ error: "Invalid token" });
    }
    const user = yield User_model_1.default.findById(decodedToken.userId);
    if (!user) {
        logger_1.default.info("No user found with id:", decodedToken.userId);
        throw new not_found_error_1.default("User not found");
    }
    req.user = {
        username: user.username,
        userId: user._id
    };
    next();
});
exports.default = {
    errorHandler,
    notFound,
    requestLogger,
    userExtractor
};
