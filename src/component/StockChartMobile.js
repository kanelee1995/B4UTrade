import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const StockChart = ({userInput}) => {
  const [stockDateDataM, setstockDateDataM] = useState([]);
  const [stockCloseDataM, setstockCloseDataM] = useState([]);

  const data = {
    labels: stockDateDataM,
    datasets: [
      {
        label: "Daily Close",
        data: stockCloseDataM,
        fill: true,
        backgroundColor: "rgb(6, 214, 160, 0.3)",
        borderColor: "#06d6a0",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="stockChartMobile">
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
