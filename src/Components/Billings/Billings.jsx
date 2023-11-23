import React from 'react'
import { Bar } from "react-chartjs-2";
import sourceData from "../../Data/sourceData.json";
const Billings = () => {
  return (
    <div className='graph bar grid-common'> <Bar
    data={{
      labels: sourceData.map((data) => data.label),
      datasets: [
        {
          label: "Count",
          data: sourceData.map((data) => data.value),
          backgroundColor: [
            "rgba(43, 63, 229, 0.8)",
            "rgba(250, 192, 19, 0.8)",
            "rgba(253, 135, 135, 0.8)",
          ],
          borderRadius: 5,
        },
      ],
    }}
    options={{
      plugins: {
        title: {
          text: "Revenue Source",
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
            color: 'white', // Change the color of the y-axis labels
          },
        },
        x:{
          beginAtZero: true,
          ticks: {
            color: 'white', 
          },
        }
        
      },
      legend: {
        labels: {
          color: 'white', // Change the color of the legend labels
        },
      },
    }}
  /></div>
  )
}

export default Billings