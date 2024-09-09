import { FC } from "react";

interface DashboardProps {
	// Define any props if needed
}

const Dashboard: FC<DashboardProps> = () => {
	return (
		<div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6 md:p-8">
			<h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
				Dashboard Overview
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Recent Transactions Section */}
				<section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						Recent Transactions
					</h2>
					<p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
						Stay on top of your recent transactions to monitor your spending
						habits and income sources.
					</p>
					<ul className="space-y-4">
						<li className="flex justify-between text-gray-700 dark:text-gray-300">
							<span>Groceries</span>
							<span>₨ 50.00</span>
						</li>
						<li className="flex justify-between text-gray-700 dark:text-gray-300">
							<span>Utilities</span>
							<span>₨ 120.00</span>
						</li>
						<li className="flex justify-between text-gray-700 dark:text-gray-300">
							<span>Salary</span>
							<span>₨ 2000.00</span>
						</li>
						{/* Add more transactions here as needed */}
					</ul>
				</section>

				{/* Income Section */}
				<section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						Total Income
					</h2>
					<p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
						Displays the total income for the current month. This includes all
						your earnings from various sources.
					</p>
					<p className="text-xl font-bold text-green-500 dark:text-green-400">
						₨ 3000.00
					</p>
				</section>

				{/* Expenses Section */}
				<section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						Total Expenses
					</h2>
					<p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
						Sum of all expenses for the current month. Track your spending to
						ensure it aligns with your budget.
					</p>
					<p className="text-xl font-bold text-red-500 dark:text-red-400">
						₨ 170.00
					</p>
				</section>

				{/* Budget Overview Section */}
				<section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
					<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						Budget Overview
					</h2>
					<p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
						An overview of your budget helps you understand how well you are
						managing your finances. Review your monthly budget, savings, and
						upcoming bills in one place.
					</p>
					<div className="flex flex-col lg:flex-row gap-6">
						<div className="bg-blue-100 dark:bg-blue-700 p-4 rounded-lg flex-1">
							<h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100">
								Monthly Budget
							</h3>
							<p className="text-xl font-bold text-blue-600 dark:text-blue-400">
								₨ 2000.00
							</p>
							<p className="text-sm text-gray-700 dark:text-gray-400">
								Your allocated budget for this month. Use this to plan and
								allocate funds across different categories.
							</p>
						</div>
						<div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg flex-1">
							<h3 className="text-lg font-semibold mb-2 text-green-900 dark:text-green-100">
								Savings
							</h3>
							<p className="text-xl font-bold text-green-600 dark:text-green-400">
								₨ 1500.00
							</p>
							<p className="text-sm text-gray-700 dark:text-gray-400">
								Total savings accumulated. This amount reflects your surplus
								funds after expenses and savings goals.
							</p>
						</div>
						<div className="bg-yellow-100 dark:bg-yellow-700 p-4 rounded-lg flex-1">
							<h3 className="text-lg font-semibold mb-2 text-yellow-900 dark:text-yellow-100">
								Upcoming Bills
							</h3>
							<p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
								₨ 250.00
							</p>
							<p className="text-sm text-gray-700 dark:text-gray-400">
								Projected total of upcoming bills. Plan ahead to ensure you have
								sufficient funds to cover these expenses.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Dashboard;
