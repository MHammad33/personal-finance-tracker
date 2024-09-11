import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route";
import middleware from "./utils/middleware";
import transactionsRouter from "./routes/transactions.route";

dotenv.config();
const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/transactions", middleware.userExtractor, transactionsRouter);

// Error Handling middlewares
app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
