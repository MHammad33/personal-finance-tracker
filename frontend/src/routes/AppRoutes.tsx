import React, { lazy, Suspense } from "react";
import {
	createBrowserRouter,
	RouterProvider,
	RouteObject,
} from "react-router-dom";
import { Layout } from "../components";

const Home = lazy(() => import("../pages/Homepage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Signup = lazy(() => import("../pages/SignupPage"));

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "login", element: <Login /> },
			{ path: "signup", element: <Signup /> },
		],
	},
];

const router = createBrowserRouter(routes);

const AppRoutes: React.FC = () => {
	return (
		// TODO: Create Loading Component
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default AppRoutes;
