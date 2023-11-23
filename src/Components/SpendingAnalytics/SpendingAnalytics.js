import React from 'react'
import { Doughnut } from "react-chartjs-2";
import sourceData from "../../Data/sourceData.json";
import './SpendingAnalytics.css'
const SpendingAnalytics = () => {
  return (
    <div className="graph pie grid-common"><Doughnut
    data={{
      labels: sourceData.map((data) => data.label),
      fontSize: 40,
      datasets: [
        {
          label: "Count",
          data: sourceData.map((data) => data.value),
          backgroundColor:[
            "#4CAF50",
            "#FF5722",
            "#2196F3",
            "#FFC107",
            "#9C27B0",
            "#795548",
            "#FF4081",
            "#00BCD4",
            "#8BC34A",
            "#FF9800"
          ],
          borderColor:[
            "#4CAF50",
            "#FF5722",
            "#2196F3",
            "#FFC107",
            "#9C27B0",
            "#795548",
            "#FF4081",
            "#00BCD4",
            "#8BC34A",
            "#FF9800"
          ],
        },
      ],
    }}
    options={{
      plugins: {
        title: {
          text: "Revenue Sources",
        },
        legend: {
          labels: {
              color: "white",

          }
      },
      },
    }}
  />
</div>
  )
}

export default SpendingAnalytics