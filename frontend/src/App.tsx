import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { useEffect, useState } from "react";
import { fetchAllTransactions } from "./store/slices/transactionSlice";
import { AppDispatch } from "./store";
import LoadingOverlay from "./components/LoadingOverlay";

function App() {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchAllTransactions());
	}, []);

	return (
		<>
			<LoadingOverlay isLoading={loading}>
				<AppRoutes />
			</LoadingOverlay>
		</>
	);
}

export default App;
