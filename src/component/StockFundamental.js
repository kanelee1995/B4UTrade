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
        color: rowData < 0 ? "red" : "green",
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
          headerStyle: { backgroundColor: "#696868", color: "#FFF" },
          rowStyle: { backgroundColor: "#696868", color: "#FFF" },
        }}
      />
    </div>
  );
};

export default StockFundamental;
