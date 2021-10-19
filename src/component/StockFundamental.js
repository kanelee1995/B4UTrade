import MaterialTable from "material-table";

const StockFundamental = ({ earnings }) => {
  const columns = [
    {
      title: "Quarter",
      field: "fiscalDateEnding",
    },
    {
      title: "Estimated",
      field: "estimatedEPS",
    },
    {
      title: "Reported",
      field: "reportedEPS",
    },

    {
      title: "Surprise %",
      field: "surprisePercentage",
      cellStyle: (rowData) => ({
        color: rowData < 0 ? "red" : "rgb(6, 214, 160)",
      }),

    },
  ];

  return (
    <div className="fundamentals">

      <MaterialTable
        columns={columns}
        data={earnings}
        title="Earnings"
        options={{
          search: false,
          headerStyle: { backgroundColor: "#343a40", color: "#e9ecef" },
          rowStyle: { backgroundColor: "#343a40", color: "#e9ecef" },
        }}
      />
    </div>
  );
};

export default StockFundamental;
