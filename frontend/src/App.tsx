import { Button } from "./components/ui/button";
import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<>
			<AppRoutes />
			<Button variant={"destructive"}>Test Shadcn</Button>
		</>
	);
}

export default App;
