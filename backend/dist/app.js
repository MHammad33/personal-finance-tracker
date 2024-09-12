"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const middleware_1 = __importDefault(require("./utils/middleware"));
const transactions_route_1 = __importDefault(require("./routes/transactions.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(middleware_1.default.requestLogger);
// Routes
app.get("/", (req, res) => {
    res.send("Finance Tracker");
});
app.use("/api/v1/auth", auth_route_1.default);
app.use("/api/v1/transactions", middleware_1.default.userExtractor, transactions_route_1.default);
// Error Handling middlewares
app.use(middleware_1.default.notFound);
app.use(middleware_1.default.errorHandler);
exports.default = app;
