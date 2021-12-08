import MaterialTable from "material-table";
import { motion } from "framer-motion";


const StockFundamental = ({ earnings }) => {
  const columns = [
    {
      title: "Quarter",
      field: "fiscalDateEnding",
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

  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    className="stockTable"
  >      <MaterialTable
        columns={columns}
        data={earnings}
        title="Earnings"
        options={{
          search: false,
          headerStyle: { backgroundColor: "#00000000", color: "#e9ecef" },
          // rowStyle: { backgroundColor: "#343a40", color: "#e9ecef" },
        }}
      />
    </motion.div>
  );
};

export default StockFundamental;
