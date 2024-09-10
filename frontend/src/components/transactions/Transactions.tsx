import { useState } from "react";
import TransactionForm from "./TransactionForm";
import { Button } from "../ui/button";

interface Transaction {
	id: string;
	userId: string;
	date: string;
	description: string;
	amount: number;
	type: "income" | "expense";
	category: string;
}

const initialTransactions: Transaction[] = [
	{
		id: "1",
		userId: "123",
		date: "2024-09-10",
		description: "Salary",
		amount: 5000,
		type: "income",
		category: "Work",
	},
	{
		id: "2",
		userId: "123",
		date: "2024-09-11",
		description: "Grocery",
		amount: -150,
		type: "expense",
		category: "Food",
	},
];

const Transactions: React.FC = () => {
	const [transactions, setTransactions] =
		useState<Transaction[]>(initialTransactions);
	const [showTransactionForm, setShowTransactionForm] = useState(false);

	const addTransaction = (transaction: Omit<Transaction, "id">) => {
		setTransactions((prev) => [
			...prev,
			{ ...transaction, id: Date.now().toString() },
		]);
	};

	return (
		<div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
			<h1 className="text-2xl font-bold mb-4">Transactions</h1>

			<div className="w-full text-right">
				<Button onClick={() => setShowTransactionForm((prev) => !prev)}>
					{showTransactionForm ? "Cancel" : "Add"} Transaction
				</Button>
			</div>
			{showTransactionForm && <TransactionForm onSubmit={addTransaction} />}

			<table className="min-w-full bg-white dark:bg-gray-800 mt-6">
				<thead>
					<tr className="text-left border-b">
						<th className="py-2 px-4">Date</th>
						<th className="py-2 px-4">Description</th>
						<th className="py-2 px-4">Category</th>
						<th className="py-2 px-4">Amount</th>
						<th className="py-2 px-4">Type</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id} className="border-b">
							<td className="py-2 px-4">{transaction.date}</td>
							<td className="py-2 px-4">{transaction.description}</td>
							<td className="py-2 px-4">{transaction.category}</td>
							<td
								className={`py-2 px-4 ${
									transaction.type === "income"
										? "text-green-500"
										: "text-red-500"
								}`}
							>
								{transaction.amount.toLocaleString("ur-PK", {
									style: "currency",
									currency: "PKR",
								})}
							</td>
							<td className="py-2 px-4 capitalize">{transaction.type}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Transactions;
