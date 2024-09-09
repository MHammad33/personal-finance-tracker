// Transaction.tsx
import { FC, useState } from "react";

const Transaction: FC = () => {
	const [formData, setFormData] = useState({
		userId: "",
		amount: "",
		type: "income",
		category: "",
		date: "",
	});

	// Handle form field changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add form submission logic here, such as API calls
		console.log("Transaction form data:", formData);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
			>
				<h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
					Add Transaction
				</h2>

				{/* User ID */}
				<div>
					<label
						htmlFor="userId"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						User ID
					</label>
					<input
						type="text"
						id="userId"
						name="userId"
						value={formData.userId}
						onChange={handleChange}
						required
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>

				{/* Amount */}
				<div>
					<label
						htmlFor="amount"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Amount
					</label>
					<input
						type="number"
						id="amount"
						name="amount"
						value={formData.amount}
						onChange={handleChange}
						required
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>

				{/* Type */}
				<div>
					<label
						htmlFor="type"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Type
					</label>
					<select
						id="type"
						name="type"
						value={formData.type}
						onChange={handleChange}
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					>
						<option value="income">Income</option>
						<option value="expense">Expense</option>
					</select>
				</div>

				{/* Category */}
				<div>
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Category
					</label>
					<input
						type="text"
						id="category"
						name="category"
						value={formData.category}
						onChange={handleChange}
						required
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>

				{/* Date */}
				<div>
					<label
						htmlFor="date"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Date
					</label>
					<input
						type="date"
						id="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
						required
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>

				<button
					type="submit"
					className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
				>
					Add Transaction
				</button>
			</form>
		</div>
	);
};

export default Transaction;
