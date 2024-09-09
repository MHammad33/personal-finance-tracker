import { FC } from "react";
import { Link } from "react-router-dom";

interface HomepageProps {

const Homepage: FC<HomepageProps> = ({}) => {
	return <h1>Home page</h1>;
								className="bg-white text-blue-600 border border-blue-400 px-4 py-2 rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
							>
								Learn More
							</Link>
						</>
					) : (
						<Link
							to="/transactions"
							className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
						>
							View Your Transactions
						</Link>
					)}
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-white shadow-lg rounded-lg p-6 mb-6">
				<h2 className="text-2xl font-semibold mb-4">Why Use Our Tool?</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="p-4 border border-gray-300 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Track Spending</h3>
						<p className="text-sm">
							Easily monitor your daily expenses, categorize them, and keep an
							eye on where your money is going.
						</p>
					</div>
					<div className="p-4 border border-gray-300 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Analyze Finances</h3>
						<p className="text-sm">
							Get detailed insights with interactive charts and reports to
							understand your financial patterns and make informed decisions.
						</p>
					</div>
					<div className="p-4 border border-gray-300 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
						<p className="text-sm">
							Your data is protected with industry-leading security measures,
							ensuring your information remains confidential and safe.
						</p>
					</div>
					<div className="p-4 border border-gray-300 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Custom Alerts</h3>
						<p className="text-sm">
							Set up custom notifications to stay on top of your budget and
							receive alerts for significant financial events.
						</p>
					</div>
					<div className="p-4 border border-gray-300 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
						<p className="text-sm">
							Seamlessly integrate with your bank accounts and other financial
							tools for a comprehensive view of your finances.
						</p>
					</div>
					<div className="p-4 border border-gray-300 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2">Budget Planning</h3>
						<p className="text-sm">
							Plan your budget effectively with customizable categories and
							spending limits to ensure you stay on track financially.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
				<h2 className="text-2xl font-semibold mb-4">What Our Users Say</h2>
				<div className="space-y-4">
					<blockquote className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
						<p className="text-base mb-2">
							"This tool has completely transformed the way I manage my
							finances. It's user-friendly and incredibly insightful."
						</p>
						<cite className="block text-sm text-gray-600">- Alex J.</cite>
					</blockquote>
					<blockquote className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
						<p className="text-base mb-2">
							"I love the detailed reports and easy-to-use interface. It has
							made tracking my expenses and budgeting a breeze."
						</p>
						<cite className="block text-sm text-gray-600">- Jamie L.</cite>
					</blockquote>
				</div>
			</section>

			{/* Call to Action Section */}
			{!isLoggedIn && (
				<section className="text-center py-6">
					<h2 className="text-2xl font-semibold mb-3">
						Ready to Take Control?
					</h2>
					<p className="text-base mb-4">
						Join us today and start managing your finances like a pro. Sign up
						now and take the first step towards financial clarity!
					</p>
					<Link
						to="/signup"
						className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
					>
						Sign Up
					</Link>
				</section>
			)}
		</div>
	);
};

export default Homepage;
