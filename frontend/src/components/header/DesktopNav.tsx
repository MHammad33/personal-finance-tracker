import { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "../ui/button";

interface DesktopNavProps {
	isLoggedIn: boolean;
}

const DesktopNav: FC<DesktopNavProps> = ({ isLoggedIn }) =>
	!isLoggedIn ? (
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
	);

export default DesktopNav;
