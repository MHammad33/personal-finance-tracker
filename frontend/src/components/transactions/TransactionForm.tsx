import { useState } from "react";

interface Transaction {
	id: string;
	userId: string;
	date: string;
	description: string;
	amount: number;
	type: "income" | "expense";
	category: string;
}

const TransactionForm: React.FC<{
	onSubmit: (transaction: Omit<Transaction, "id">) => void;
}> = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		userId: "",
		description: "",
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
		onSubmit({
			userId: formData.userId,
			description: formData.description,
			amount: parseFloat(formData.amount),
			type: formData.type as "income" | "expense",
			category: formData.category,
			date: formData.date,
		});
		setFormData({
			userId: "",
			description: "",
			amount: "",
			type: "income",
			category: "",
			date: "",
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
		>
			<h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
				Add Transaction
			</h2>

			{/* Form Fields - same as your Transaction.tsx file */}
			{/* Use the same fields and Tailwind CSS styles from your provided Transaction form code */}

			<button
				type="submit"
				className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
			>
				Add Transaction
			</button>
		</form>
	);
};

export default TransactionForm;
