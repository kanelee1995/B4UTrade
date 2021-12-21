import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const StockChart = ({ userInput }) => {
  const [stockDateData, setstockDateData] = useState([]);
  const [stockCloseData, setstockCloseData] = useState([]);

  const data = {
    labels: stockDateData,
    datasets: [
      {
        label: "Daily Close",
        data: stockCloseData,
        fill: true,
        backgroundColor: "rgb(6, 214, 160, 0.1)",
        borderColor: "#06d6a0",
        color: "rgb(233, 236, 239)",
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

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://twelve-data1.p.rapidapi.com/time_series",
      params: {
        symbol: `${userInput}`,
        interval: "1day",
        outputsize: "90",
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
        setstockDateData(
          response.data["values"].reverse().map((stock) => stock["datetime"])
        );
        setstockCloseData(
          response.data["values"].map((stock) => stock["close"])
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [userInput]);

  return (
    <div className="stockChart">
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
