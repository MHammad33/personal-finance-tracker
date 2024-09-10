import { RootState } from "@/store";
import { FC, ReactNode, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface AuthGuardProps {
	children: ReactNode;
	requiresAuth?: boolean;
}

const Protected: FC<AuthGuardProps> = ({ children, requiresAuth = true }) => {
	const { isLoggedIn, isLoading } = useSelector(
		(state: RootState) => state.auth
	);

	const navigate = useNavigate();

	const handleNavigation = useCallback(() => {
		if (!isLoading) {
			const shouldRedirectToLogin = requiresAuth && !isLoggedIn;
			const shouldRedirectToDashboard = !requiresAuth && isLoggedIn;

			if (shouldRedirectToLogin) {
				navigate("/login", { replace: true });
			} else if (shouldRedirectToDashboard) {
				navigate("/dashboard", { replace: true });
			}
		}
	}, [isLoggedIn, isLoading, navigate, requiresAuth]);

	useEffect(() => {
		handleNavigation();
	}, [handleNavigation]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return <>{children}</>;
};

export default Protected;
