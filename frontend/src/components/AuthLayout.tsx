import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "@/context/AuthContext";

interface AuthGuardProps {
	children: ReactNode;
	requiresAuth?: boolean;
}

const Protected: FC<AuthGuardProps> = ({ children, requiresAuth = true }) => {
	const isLoggedIn = false;
	const isLoading = false;
	// const { isLoggedIn, isLoading } = useAuthContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoading) {
			if (requiresAuth && !isLoggedIn) {
				navigate("/login");
			} else if (!requiresAuth && isLoggedIn) {
				navigate("/dashboard");
			}
		}
	}, [isLoggedIn, isLoading, navigate, requiresAuth]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return <>{children}</>;
};

export default Protected;
