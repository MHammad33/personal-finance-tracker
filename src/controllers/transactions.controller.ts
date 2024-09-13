import { Request, Response } from "express";
import Transaction from "../models/Transaction.model";

const fetchAllTransactions = async (req: Request, res: Response) => {
  const transactions = await Transaction.find({ userId: req.user?.userId });
  res.status(200).json(transactions);
};

const createNewTransaction = async (req: Request, res: Response) => {
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
