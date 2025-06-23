import { Request, Response } from "express";
import Transaction from "../models/Transaction.model";

interface TransactionBody {
  amount: number;
  type: string;
  category: string;
  date: Date;
  description: string;
}

const fetchAllTransactions = async (req: Request, res: Response) => {
  const { page = 1, limit = 10, sort = "desc", category } = req.query;
  const userId = req.user?.userId;

  const filter = { userId, ...(category ? { category } : {}) };

  const transactions = await Transaction.find(filter)
    .sort({ date: sort === "desc" ? -1 : 1 })
    .limit(Number(limit))
    .skip((Number(page) - 1) * Number(limit));

  res.status(200).json(transactions);
};

const createNewTransaction = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    TransactionBody
  >,
  res: Response
) => {
  const { amount, type, category, date, description } = req.body;
  const userId = req.user?.userId;
  const newTransaction = new Transaction({
    userId,
    amount,
    description,
    type,
    category,
    date
  });

  const savedTransaction = await newTransaction.save();
  res.status(201).json(savedTransaction);
};

export default {
  fetchAllTransactions,
  createNewTransaction
};
