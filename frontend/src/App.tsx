import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { fetchAllTransactions } from "./store/slices/transactionSlice";
import { AppDispatch } from "./store";

function App() {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchAllTransactions());
	}, []);

	return (
		<>
			<AppRoutes />
		</>
	);
}

export default App;
