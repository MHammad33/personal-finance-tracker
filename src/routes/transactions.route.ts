import { Router } from "express";
import transactionsController from "../controllers/transactions.controller";

const transactionsRouter = Router();

// Route - /api/v1/transactions
transactionsRouter
  .route("/")
  .get(transactionsController.fetchAllTransactions)
  .post(transactionsController.createNewTransaction);

export default transactionsRouter;
