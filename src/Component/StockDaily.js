import MaterialTable from "material-table";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios";

const StockTable = ({ userInput }) => {
  const [tableData, settableData] = useState([]);

  const changeCalculator = (open, close) => {
    return ((Number(close) - Number(open)) / Number(open)) * 100;
  };

  const changeResultToPercent = (num) => {
    return Math.round(num * 100) / 100;
  };

  // const d = new Date();
  // const monthName = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];
  // let day = d.getDate();
  // let month = monthName[d.getMonth()];

  const columns = [
    {
      title: "Date",
      field: "datetime",
      render: (rowData) => rowData.datetime.slice(5),
    },
    {
      title: "Chg %",
      render: (rowData) =>
        changeResultToPercent(changeCalculator(rowData.open, rowData.close)) +
        "%",
      // cellStyle: (rowData) => ({
      //   color: rowData < 0 ? "red" : "rgb(6, 214, 160)",
      // }),
    },
    // {
    //   title: "Previous Close",
    //   render: (rowData) => Math.round(rowData.open * 100) / 100,
    // },
    {
      title: "Open",
      field: "open",
      render: (rowData) => Math.round(rowData.open * 100) / 100,
    },
    {
      title: "Close",
      field: "close",
      render: (rowData) => Math.round(rowData.close * 100) / 100,
    },
    {
      title: "High",
      field: "high",
      render: (rowData) => Math.round(rowData.high * 100) / 100,
    },
    {
      title: "Low",
      field: "low",
      render: (rowData) => Math.round(rowData.low * 100) / 100,
    },
    {
      title: "Vol",
      field: "volume",
    },
  ];

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
        settableData(response.data["values"]);
        // console.log(response.data["values"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [userInput]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="stockTable"
    >
      <MaterialTable
        columns={columns}
        data={tableData}
        title="Daily Open/Close"
        options={{
          search: false,
          headerStyle: { backgroundColor: "#00000000", color: "#e9ecef" },
          // rowStyle: { backgroundColor: "#00000015", color: "#e9ecef" },
        }}
        localization={{
          body: {
            emptyDataSourceMessage: "Loading data...",
          },
        }}
      />
    </motion.div>
  );
};

export default StockTable;
