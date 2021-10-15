import MaterialTable from "material-table";

const StockTable = ({ tableData }) => {
  const columns = [
    { title: "Date", field: "datetime" },
    { title: "Open", field: "open" },
    { title: "Close", field: "close" },
    { title: "High", field: "high" },
    { title: "Low", field: "low" },
    { title: "Volume", field: "volume" },
  ];

  return (
    <div>
      <MaterialTable
        columns={columns}
        data={tableData}
        title="Daily Open/Close"
        options={{
          search: false,
          headerStyle: { backgroundColor: "#696868", color: "#FFF" },
          rowStyle: { backgroundColor: "#696868", color: "#FFF" },
        }}
      />
    </div>
  );
};

export default StockTable;
