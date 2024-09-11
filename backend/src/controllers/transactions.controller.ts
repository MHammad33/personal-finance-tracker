import { Request, Response } from "express";
import Transaction from "../models/Transaction.model";

const fetchAllTransactions = async (req: Request, res: Response) => {};

const createNewTransaction = async (req: Request, res: Response) => {
  const { amount, type, category, date } = req.body;
  const userId = (req as any).userId;
  const newTransaction = new Transaction({
    userId,
    amount,
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
