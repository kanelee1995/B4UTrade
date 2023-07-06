// import MaterialTable, { MTableCell } from "material-table";
import MaterialTable from "material-table";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEYS from "../api";

const StockNews = ({ userInput }) => {
    const [news, setnews] = useState([]);
    const key = API_KEYS.polygon;


    const columns = [
        {
            title: "Date",
            field: "published_utc",
            render: (rowData) => rowData.published_utc.slice(5, 10),
            width: "10%",
        },
        {
            title: "Title",
            field: "title",
            width: "90%",
            render: (rowData) => (
                <a href={rowData.article_url} className="newsUrl">
                    {rowData.title}
                </a>
            ),
        },
        {
            title: "Tickers",
            field: "tickers",
            render: (rowData) => (
                <div className="newsTicker">{rowData.tickers.slice(0, 3).join()}</div>
            ),
        },
    ];

    useEffect(() => {
        axios
            .get(
                `https://api.polygon.io/v2/reference/news?ticker=${userInput}&limit=10&apiKey=${key}`
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
                    rowStyle: {
                        overflowWrap: "break-word",
                    },
                }}
                localization={{
                    body: {
                        emptyDataSourceMessage: "Loading data...",
                    },
                }}
                aria-label="Stock News Table"
            />
        </motion.div>
    );
};

export default StockNews;
