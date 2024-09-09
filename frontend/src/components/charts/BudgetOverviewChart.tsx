// src/components/charts/BudgetOverviewChart.tsx
import { FC } from "react";
import ApexCharts from "react-apexcharts";

const BudgetOverviewChart: FC = () => {
	const options = {
		chart: {
			type: "pie" as const,
		},
		labels: ["Rent", "Savings", "Groceries", "Entertainment", "Others"],
		colors: ["#008FFB", "#00E396", "#FF4560", "#775DD0", "#FEB019"],
	};

	const series = [40, 20, 15, 10, 15];

	return (
		<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Budget Overview
			</h2>
			<ApexCharts options={options} series={series} type="pie" height={300} />
		</div>
	);
};

export default BudgetOverviewChart;
