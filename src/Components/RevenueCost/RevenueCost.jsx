// import { iconsImgs } from "../../Data/images"
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./RevenueCost.css";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import revenueData from "../../Data/revenueData.json";
import sourceData from "../../Data/sourceData.json";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RevenueCost = () => {
  
  return (
    <div className="graph grid-common">
      <Line
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue),
              backgroundColor: "#064FF0",
              borderColor: "#064FF0",
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              backgroundColor: "#FF3030",
              borderColor: "#FF3030",
            },
          ],
        }}
        options={{
          responsive: true,
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: {
            title: {
              text: "Monthly Revenue & Cost",
            },
            legend: {
              labels: {
                  color: "white",
                  fontSize: 18
              }
          },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: 'white', 
              },
            },
            x:{
                beginAtZero: true,
              ticks: {
                color: 'white', 
              },
            }
          },
      
        
        }}
      />
    </div>
  );
};

export default RevenueCost;

//   backgroundColor: "#064FF0",
