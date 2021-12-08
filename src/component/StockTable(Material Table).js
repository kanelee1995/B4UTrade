import MaterialTable from "material-table";
import { motion } from "framer-motion";


const StockTable = ({ tableData }) => {
  const changeCalculator = (open, close) => {
    return ((Number(close) - Number(open)) / Number(open)) * 100;
  };

  const changeResultToPercent = (num) => {
    return Math.round(num * 100) / 100;
  };

  const columns = [
    { title: "Date", field: "datetime" },
    {
      title: "Change %",
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
      title: "Volume",
      field: "volume",
    },
  ];

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
      />
    </motion.div>
  );
};

export default StockTable;
