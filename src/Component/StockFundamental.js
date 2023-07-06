import MaterialTable from "material-table";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEYS from "../api";

const StockFundamental = ({ userInput }) => {
    const [earnings, setearnings] = useState([]);
    const key = API_KEYS.alphavantage;

    const columns = [
        {
            title: "Quarter",
            field: "fiscalDateEnding",
            render: (rowData) => rowData.fiscalDateEnding.slice(0, 7)
        },
        {
            title: "Surprise %",
            field: "surprisePercentage",
            cellStyle: (rowData) => ({
                color: rowData < 0 ? "red" : "rgb(6, 214, 160)",
            }),
            render: (rowData) => Math.round(rowData.surprisePercentage * 10) / 10,
        },
        {
            title: "Estimated",
            field: "estimatedEPS",
            render: (rowData) => Math.round(rowData.estimatedEPS * 100) / 100,
        },
        {
            title: "Reported",
            field: "reportedEPS",
        },
    ];

    useEffect(() => {
        axios
            .get(
                `https://www.alphavantage.co/query?function=EARNINGS&symbol=${userInput}&apikey=${key}`
            )
            .then((response) => {
                setearnings(response["data"]["quarterlyEarnings"]);
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
                data={earnings}
                title="Earnings"
                options={{
                    search: false,
                    headerStyle: { backgroundColor: "#00000000", color: "#e9ecef" },
                }}
                localization={{
                    body: {
                        emptyDataSourceMessage: "Loading data...",
                    },
                }}
                aria-label="Stock Earnings Table"
            />
        </motion.div>
    );
};

export default StockFundamental;
