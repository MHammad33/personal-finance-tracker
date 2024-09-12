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
const Transaction_model_1 = __importDefault(require("../models/Transaction.model"));
const fetchAllTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const transactions = yield Transaction_model_1.default.find({ userId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId });
    res.status(200).json(transactions);
});
const createNewTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { amount, type, category, date, description } = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const newTransaction = new Transaction_model_1.default({
        userId,
        amount,
        description,
        type,
        category,
        date
    });
    const savedTransaction = yield newTransaction.save();
    res.status(201).json(savedTransaction);
});
exports.default = {
    fetchAllTransactions,
    createNewTransaction
};
