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
          backgroundColor: [
            "rgba(43, 63, 229, 0.8)",
            "rgba(250, 192, 19, 0.8)",
            "rgba(253, 135, 135, 0.8)",
          ],
          borderColor: [
            "rgba(43, 63, 229, 0.8)",
            "rgba(250, 192, 19, 0.8)",
            "rgba(253, 135, 135, 0.8)",
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