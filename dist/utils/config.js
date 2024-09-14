"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "secret";
const JWT_SECRET_LIFETIME = process.env.JWT_SECRET_LIFETIME || "1d";
exports.default = {
    PORT,
    MONGODB_URI,
    JWT_SECRET_KEY,
    JWT_SECRET_LIFETIME
};
//# sourceMappingURL=config.js.map