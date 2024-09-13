import mongoose from "mongoose";

export interface TransactionType extends Document {
  userId: mongoose.Types.ObjectId;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: Date;
}

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    amount: {
      type: Number,
      required: true,
      min: 0
    },
    description: {
      type: String,
      required: true,
      min: 3
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true
    },
    category: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now()
    }
  },
  {
    timestamps: true
  }
);

transactionSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
    delete returnedObj.password;
  }
});

const Transaction = mongoose.model<TransactionType>(
  "Transaction",
  transactionSchema
);

export default Transaction;
