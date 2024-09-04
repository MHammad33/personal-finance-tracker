import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route";

dotenv.config();
const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRouter);

export default app;
