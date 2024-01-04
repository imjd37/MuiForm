import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import { COLUMNS } from "./Demo3";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = (table) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => table.table, [table]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Table
      sx={{ width: 1400, border: 2, my: 5, mx: "auto" }}
      {...getTableProps()}
    >
      <TableHead>
        {headerGroups.map((headerGroup, key) => (
          <TableRow
            sx={{ backgroundColor: "#9ceb9b" }}
            key={key}
            {...headerGroup.getHeaderGroupProps}
          >
            {headerGroup.headers.map((column, key) => (
              <TableCell
                key={key}
                width={column.width ? column.width : "Auto"}
                align={column.align ? column.align : "left"}
                sx={{ fontWeight: "bold" }}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " v" : " ^") : ""}
                </span>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, key) => {
          prepareRow(row);
          return (
            <TableRow key={key} {...row.getRowProps()}>
              {row.cells.map((cell, key) => {
                return (
                  <TableCell
                    key={key}
                    align={row.align ? row.align : "left"}
                    {...cell.getCellProps}
                  >
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default MuiTable;
