"use client";

import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

const PieChartDashboard = () => {
  const pieChartRef = useRef(null);

  useEffect(() => {
    let myChart; // Store the chart instance
    const ctx = pieChartRef?.current;

    if (ctx) {
      myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Direct", "Referral", "Organic"],
          datasets: [
            {
              label: "Traffic Sources",
              data: [40, 28, 32],
              backgroundColor: ["#5F2DED", "#2DB5ED", "#ED5F5F"], // Add distinct colors for segments
              hoverBackgroundColor: ["#4D23B5", "#2187B5", "#B54343"], // Colors when hovered
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "left", // Position of the legend
            },
          },
          cutout: "75%", // For a doughnut-style chart
        },
      });
    }

    // Cleanup the chart on component unmount or re-render
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full md:w-35%">
      <div className="md:px-5 py-10px md:py-0">
        <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark flex justify-between items-center gap-2">
          <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
            Traffic
          </h2>
          <div className="bg-whiteColor rounded-md relative">
            <select
              className="bg-transparent text-darkBlue w-42.5 px-3 py-6px focus:outline-none block appearance-none leading-1.5 relative z-20 focus:shadow-select border border-borderColor6 rounded-md"
              defaultValue="Today"
            >
              <option value="Today">Today</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
            <i className="icofont-simple-down absolute top-1/2 right-3 -translate-y-1/2 block text-lg z-10"></i>
          </div>
        </div>
        <canvas ref={pieChartRef}></canvas>
      </div>
    </div>
  );
};

export default PieChartDashboard;
