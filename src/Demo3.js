import { Container } from "@mui/material";
import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";

const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Height",
    accessor: "height",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Birth Date",
    accessor: "birthDate",
  },
];

export const Demo3 = (table) => {
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
    <Container
      maxWidth="md"
      sx={{ border: 2, p: 2, mt: 2, display: "flex", gap: 5 }}
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, key) => (
            <tr key={key} {...headerGroup.getHeaderGroupProps}>
              {headerGroup.headers.map((column, key) => (
                <th
                  key={key}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "v" : "^") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, key) => {
            prepareRow(row);
            return (
              <tr key={key} {...row.getRowProps()}>
                {row.cells.map((cell, key) => {
                  return (
                    <td key={key} {...cell.getCellProps}>
                      {" "}
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
    
  );
};
