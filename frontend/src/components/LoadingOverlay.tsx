import React from "react";
import Spinner from "./Spinner";

interface LoadingOverlayProps {
	isLoading: boolean;
	children: React.ReactNode;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
	isLoading,
	children,
}) => {
	return (
		<div className="relative">
			{isLoading && <Spinner />}
			<div className={isLoading ? "pointer-events-none" : ""}>{children}</div>
		</div>
	);
};

export default LoadingOverlay;
