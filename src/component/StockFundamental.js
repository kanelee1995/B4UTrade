import { render } from "@testing-library/react";
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
      // render: (rowData) => rowData.map((data) => data.estimatedEPS),
    },
    {
      title: "Reported",
      field: "reportedEPS",
      // render: (rowData) => rowData.reportedEPS),
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
      {/* <p>
        Actual Earnings:{" "}
        {earnings.map((data) => (
          <li>{data.reportedEPS}</li>
        ))}
        Estimated:{" "}
        {earnings.map((data) => (
          <li>{data.estimatedEPS}</li>
        ))}
        Surprise %:{" "}
        {earnings.map((data) => (
          <li>{data.surprisePercentage}</li>
        ))}
      </p> */}

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
