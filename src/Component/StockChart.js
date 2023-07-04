import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API_KEYS from "../api";
import { set } from "date-fns";

const StockChart = ({ userInput }) => {
  const [stockDateData, setstockDateData] = useState([]);
  const [stockCloseData, setstockCloseData] = useState([]);
  const isMobileViewport = () => window.innerWidth <= 768;

  const [error, setError] = useState(false);
  const key = API_KEYS.twelveData;

//   if (isMobileViewport) {
//     setIsMobile(true);
//   } else {
//     setIsMobile(false);
//   }

  const data = {
    labels: stockDateData.map((data) => data.slice(5)),
    datasets: [
      {
        label: "Daily Close",
        data: stockCloseData,
        fill: true,
        backgroundColor: "rgb(6, 214, 160, 0.1)",
        borderColor: "#06d6a0",
        color: "#ced4da",
      },
    ],
  };

  const chartOptionsDesktop = {
    responsive: true,
    // layout: {
    //   padding: 15,
    // },
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

//   const chartOptionsMobile = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         labels: {
//           padding: 5,
//         },
//       },
//     },
//   };

  useEffect(() => {
    const apiOptionsMobile = {
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

    const apiOptionsDesktop = {
      method: "GET",
      url: "https://twelve-data1.p.rapidapi.com/time_series",
      params: {
        symbol: `${userInput}`,
        interval: "1day",
        outputsize: "90",
        format: "json",
      },
      headers: {
        "x-rapidapi-key": `${key}`,
        "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
      },
    };

    const apiOptions = isMobileViewport()
      ? apiOptionsMobile
      : apiOptionsDesktop;

    axios
      .request(apiOptions)
      .then(function (response) {
        setstockDateData(
          response.data["values"].reverse().map((stock) => stock["datetime"])
        );
        setstockCloseData(
          response.data["values"].map((stock) => stock["close"])
        );
      })
      .catch(function (error) {
        setError(true);
      });
  }, [userInput]);

  return (
    <div className="stockChart">
      <Line data={data} options={chartOptionsDesktop} />
      {error && (
        <div className="errMsg">
          {/* {error} */}
          Invalid Symbol, please try again.
          <Link to="/" className="redirectBtn">
            Back to homepage
          </Link>
        </div>
      )}
    </div>
  );
};

export default StockChart;
