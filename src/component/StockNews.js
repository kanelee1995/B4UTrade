import MaterialTable from "material-table";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios";

const StockNews = ({ userInput }) => {
  const [news, setnews] = useState([]);

  const columns = [
    {
      title: "Date",
      field: "published_utc",
    },
    {
      title: "Tickers",
      field: "tickers",
      render: (rowData) => rowData.tickers.slice(0, 3).join(),
    },
    {
      title: "Title",
      field: "title",
      render: (rowData) => <a href={rowData.article_url}>{rowData.title}</a>,
    },
  ];

  useEffect(() => {
    axios
      .get(
        `https://api.polygon.io/v2/reference/news?ticker=${userInput}&limit=10&apiKey=REGDCE9oeokuBTeCkEQpYRH81FU_a7if`
      )
      .then((response) => {
        setnews(response["data"]["results"]);
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
        data={news}
        title="Ticker News"
        options={{
          search: false,
          headerStyle: { backgroundColor: "#00000000", color: "#e9ecef" },
          // rowStyle: { backgroundColor: "#343a40", color: "#e9ecef" },
        }}
      />
    </motion.div>
  );
};

export default StockNews;
