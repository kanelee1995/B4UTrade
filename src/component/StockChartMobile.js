import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const StockChart = ({ userInput }) => {
  const [stockDateDataM, setstockDateDataM] = useState([]);
  const [stockCloseDataM, setstockCloseDataM] = useState([]);

  const data = {
    labels: stockDateDataM.map((data) => data.slice(5)),
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
    plugins: {
      legend: {
          labels: {
              padding: 5
          }
      }
  }
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://twelve-data1.p.rapidapi.com/time_series",
      params: {
        symbol: `${userInput}`,
        interval: "1day",
        outputsize: "7",
        format: "json",
      },
      headers: {
        "x-rapidapi-key": "52979a8a04msha30f088adf5a675p1868e1jsnc49e105d3bfc",
        "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setstockDateDataM(
          response.data["values"].reverse().map((stock) => stock["datetime"])
        );
        setstockCloseDataM(
          response.data["values"].map((stock) => stock["close"])
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [userInput]);

  return (
    <div className="stockChartMobile">
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
