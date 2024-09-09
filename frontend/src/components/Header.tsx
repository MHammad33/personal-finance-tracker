import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, User, Moon, Sun } from "lucide-react";

interface HeaderProps {
	isLoggedIn: boolean; // Prop to determine if the user is logged in
}

const Header: FC<HeaderProps> = ({ isLoggedIn }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(
		document.documentElement.classList.contains("dark")
	);

	// Toggle function for mobile menu
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	// Toggle function for dark mode
	const toggleDarkMode = () => {
		document.documentElement.classList.toggle("dark");
		setIsDarkMode(document.documentElement.classList.contains("dark"));
	};

	return (
		<header
			className={`flex justify-between items-center p-4 transition-colors duration-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-white shadow-md`}
		>
			<div className="text-lg font-semibold">
				<Link to="/">Finance Tracker</Link>
			</div>

			<button
				className="md:hidden block text-inherit"
				onClick={toggleMenu}
				aria-label="Toggle Menu"
			>
				<Menu size={24} />
			</button>

			<nav
				className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-4 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out border-t md:border-none ${
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

				{/* Conditional rendering for Login/Signup or Profile */}
				{!isLoggedIn && (
					<div className="flex flex-col space-y-2 md:hidden">
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

			<div className="hidden md:flex items-center space-x-2">
				<Button
					variant="ghost"
					aria-label="Toggle Dark Mode"
					onClick={toggleDarkMode}
				>
					{isDarkMode ? (
						<Sun size={20} className="text-gray-400" />
					) : (
						<Moon size={20} className="text-gray-700" />
					)}
				</Button>

				{/* Conditionally render profile button or login/signup links */}
				{!isLoggedIn ? (
					<div className="hidden md:flex space-x-2">
						<Link
							to="/login"
							className="text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded"
						>
							Sign in
						</Link>
						<Link
							to="/signup"
							className=" dark:text-white text-white bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded"
						>
							Register
						</Link>
					</div>
				) : (
					<Button variant="ghost" aria-label="User Profile">
						<User size={20} className="text-inherit" />
					</Button>
				)}
			</div>
		</header>
	);
};

export default Header;
