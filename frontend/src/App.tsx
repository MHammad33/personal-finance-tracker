import AppRoutes from "./routes/AppRoutes";
import LoadingOverlay from "./components/LoadingOverlay";

function App() {
	return (
		<>
			<LoadingOverlay>
				<AppRoutes />
			</LoadingOverlay>
		</>
	);
}

export default App;
