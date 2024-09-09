import { FC } from "react";
import { Link } from "react-router-dom";

interface MobileNavProps {
	isMenuOpen: boolean;
	isLoggedIn: boolean;
}

const MobileNav: FC<MobileNavProps> = ({ isMenuOpen, isLoggedIn }) => (
	<nav
		className={`flex flex-col md:flex-row items-center md:space-x-4 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out border-t md:border-none ${
			isMenuOpen ? "flex" : "hidden"
		} absolute md:static top-16 left-0 w-full md:w-auto p-4 md:p-0 z-20 ${
			isMenuOpen ? "shadow-lg" : ""
		}`}
	>
		<Link
			to="/"
			className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
		>
			Home
		</Link>
		<Link
			to="/about"
			className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
		>
			About
		</Link>
		<Link
			to="/expenses"
			className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
		>
			Expenses
		</Link>

		{!isLoggedIn && (
			<div
				className={`flex flex-col items-center w-full space-y-2 transition-opacity duration-300 ease-in-out ${
					isMenuOpen ? "opacity-100" : "opacity-0"
				}`}
			>
				{/* Added transition to improve visibility changes */}
				<Link
					to="/login"
					className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
				>
					Login
				</Link>
				<Link
					to="/signup"
					className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
				>
					Sign Up
				</Link>
			</div>
		)}
	</nav>
);

export default MobileNav;
