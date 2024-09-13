"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactions_controller_1 = __importDefault(require("../controllers/transactions.controller"));
const transactionsRouter = (0, express_1.Router)();
// Route - /api/v1/transactions
transactionsRouter
    .route("/")
    .get(transactions_controller_1.default.fetchAllTransactions)
    .post(transactions_controller_1.default.createNewTransaction);
exports.default = transactionsRouter;
