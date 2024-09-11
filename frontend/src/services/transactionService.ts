import axios from "axios";

interface Transaction {
	date?: string;
	amount: number;
	type: "income" | "expense";
	category: string;
}

const baseUrl = "/api/v1/transactions";
let token = "";

const setToken = (newToken: string) => {
	token = `Bearer ${newToken}`;
};

const addTransaction = async (transaction: Transaction) => {
	try {
		const config = {
			headers: {
				Authorization: token,
			},
		};
		const response = await axios.post(baseUrl, transaction, config);
		return response.data;
	} catch (error) {
		console.log("Error Adding Transaction", error);
	}
};

const fetchAllTransactions = async () => {
	try {
		const config = {
			headers: {
				Authorization: token,
			},
		};
		const response = await axios.get(baseUrl, config);
		return response.data;
	} catch (error) {
		console.log("Error Fetching Transactions", error);
	}
};

export default {
	addTransaction,
	fetchAllTransactions,
	setToken,
};
