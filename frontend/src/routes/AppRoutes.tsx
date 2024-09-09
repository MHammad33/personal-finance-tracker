import { Layout } from "@/components";
import React, { lazy, Suspense } from "react";
import {
	createBrowserRouter,
	RouterProvider,
	RouteObject,
} from "react-router-dom";

const Home = lazy(() => import("../pages/Homepage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Signup = lazy(() => import("../pages/SignupPage"));
const About = lazy(() => import("../pages/AboutPage"));
const Transaction = lazy(() => import("../pages/TransactionPage"));

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "login", element: <Login /> },
			{ path: "signup", element: <Signup /> },
			{ path: "about", element: <About /> },
			{ path: "add-transaction", element: <Transaction /> },
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
