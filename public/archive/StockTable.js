import React, { useMemo } from "react";
import { COLUMNS } from "./StockColumn";
import { usePagination, useTable } from "react-table";
import "./table.css";

const StockTable = ({tableData}) => {
  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: tableData,
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
  } = tableInstance;

  return (
    <div className="table-wrapper">
      <table className={"tableA"} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="tablePageBtn">
        <button onClick={() => previousPage()}>&lsaquo;</button>
        <button onClick={() => nextPage()}>&rsaquo;</button>
      </div>
    </div>
  );
};

export default StockTable;
