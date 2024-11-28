"use client";

import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

const LineChartDashboard = () => {
  const lineChartRef = useRef(null);

  useEffect(() => {
    let myChart;
    const ctx = lineChartRef?.current;

    if (ctx) {
      myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
          ],
          datasets: [
            {
              label: "Dataset",
              data: [148, 100, 205, 110, 165, 145, 180, 156, 148, 220, 180, 245],
              tension: 0.4,
              backgroundColor: "#5F2DED",
              borderColor: "#5F2DED",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              min: 0,
              max: 300,
              ticks: {
                stepSize: 50,
              },
            },
          },
        },
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full md:w-65%">
      <div className="md:px-5 py-10px md:py-0">
        <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark flex justify-between items-center gap-2">
          <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
            Dashboard
          </h2>
          <div className="bg-whiteColor rounded-md relative">
            <select
              className="bg-transparent text-darkBlue w-42.5 px-3 py-6px focus:outline-none block appearance-none leading-1.5 relative z-20 focus:shadow-select border border-borderColor6 rounded-md"
              defaultValue="HTML"
            >
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Javascript">Javascript</option>
              <option value="PHP">PHP</option>
              <option value="WordPress">WordPress</option>
            </select>
            <i className="icofont-simple-down absolute top-1/2 right-3 -translate-y-1/2 block text-lg z-10"></i>
          </div>
        </div>
        <canvas ref={lineChartRef}></canvas>
      </div>
    </div>
  );
};

export default LineChartDashboard;
