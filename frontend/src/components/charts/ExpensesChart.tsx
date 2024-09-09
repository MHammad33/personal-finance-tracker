import { FC } from "react";
import ApexCharts from "react-apexcharts";

const ExpensesChart: FC = () => {
	const options = {
		chart: {
			type: "bar" as const,
		},
		xaxis: {
			categories: [
				"Rent",
				"Utilities",
				"Groceries",
				"Entertainment",
				"Transportation",
			],
		},
		colors: ["#FF4560"],
	};

	const series = [
		{
			name: "Expenses",
			data: [1200, 300, 200, 400, 150],
		},
	];

	return (
		<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Expenses Breakdown
			</h2>
			<ApexCharts options={options} series={series} type="bar" height={300} />
		</div>
	);
};

export default ExpensesChart;
