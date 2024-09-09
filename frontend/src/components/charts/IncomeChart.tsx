// src/components/charts/IncomeChart.tsx
import { FC } from "react";
import ApexCharts from "react-apexcharts";

const IncomeChart: FC = () => {
	const options = {
		chart: {
			type: "line" as const,
		},
		xaxis: {
			categories: ["January", "February", "March", "April", "May", "June"],
		},
		colors: ["#00E396"],
	};

	const series = [
		{
			name: "Income",
			data: [3000, 3500, 2800, 4000, 4500, 5000],
		},
	];

	return (
		<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Income Over Time
			</h2>
			<ApexCharts options={options} series={series} type="line" height={300} />
		</div>
	);
};

export default IncomeChart;
