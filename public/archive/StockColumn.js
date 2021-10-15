export const COLUMNS = [
  {
    id: "date",
    Header: "Date",
    accessor: "datetime",
  },
  {
    id: "open",
    Header: "Open",
    accessor: (row) => Math.round(row.open * 100) / 100,
  },
  {
    id: "close",
    Header: "Close",
    accessor: (row) => Math.round(row.close * 100) / 100,
  },
  {
    id: "changePercent",
    Header: "Change %",
    accessor: (row) => changeResultToPercent(changeCalculator(row.open, row.close))+"%",
  },
  {
    Header: "High",
    accessor: "high",
  },
  {
    Header: "Low",
    accessor: "low",
  },
  {
    Header: "Volume",
    accessor: "volume",
  },
];

const changeCalculator = (open, close) => {
  return ((Number(close) - Number(open))/Number(open))*100;
};

const changeResultToPercent = (num) => {
  return Math.round(num* 100)  / 100;
};

// Conditional cell render code
// Cell: props => {
//   return props.row.original.id > 800 ? (
//     <p>{props.row.original.id}</p>
//   ) : (
//     <button disabled> No action </button>
//   );
// }
