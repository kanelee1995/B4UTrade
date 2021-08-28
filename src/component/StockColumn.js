export const COLUMNS = [
  // {
  //   id: "date",
  //   Header: "Date",
  //   accessor: "datetime",
  // },
  // {
  //   id: "open",
  //   Header: "Open",
  //   accessor: (row) => Math.round(row.open * 100) / 100,
  // },
  // {
  //   id: "close",
  //   Header: "Close",
  //   accessor: (row) => Math.round(row.close * 100) / 100,
  // },
  // {
  //   id: "changePercent",
  //   Header: "Change %",
  //   accessor: (row) => changeResultToPercent(row.open, row.close) + "%",
  // },
  {
    Header: "Ticker",
    accessor: "ticker",
  },
  {
    id: "changePercent",
    Header: "Change %",
    accessor: (row) => changeResultToPercent(row["changesPercentage"]) + "%",
  },
  // {
  //   Header: "Price",
  //   accessor: "price",
  // },
];

// const changeCalculator = (open, close) => {
//   return Number(open) - Number(close);
// };

const changeResultToPercent = (num) => {
  return Math.round(num) * 100 / 100;
};

// Conditional cell render code
// Cell: props => {
//   return props.row.original.id > 800 ? (
//     <p>{props.row.original.id}</p>
//   ) : (
//     <button disabled> No action </button>
//   );
// }
