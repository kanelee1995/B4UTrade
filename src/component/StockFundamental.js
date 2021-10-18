import { render } from "@testing-library/react";
import MaterialTable from "material-table";

const StockFundamental = ({ earnings }) => {
  const columns = [
    {
      title: "Reported EPS",
      field: "reportedEPS",
      // render: (rowData) => rowData.reportedEPS),
    },
    {
      title: "Reported EPS",
      field: "estimatedEPS",
      // render: (rowData) => rowData.map((data) => data.estimatedEPS),
    },
    {
      title: "Reported EPS",
      field: "surprisePercentage",
      // render: (rowData) => rowData.map((data) => data.surprisePercentage),
    },
    {
      title: "Quarter",
      // render:()
    }
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
