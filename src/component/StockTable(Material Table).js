import MaterialTable from "material-table";

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
    },
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
