import React from "react";
import DefaultCell from "./DefaultCell";
import moment from "moment";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Cell: ({value}) =>(
      <a 
      href="https://www.google.co.in/"
      >
        {value}
      </a>
    )
  
  },
  {
    Header: "First Name",
    accessor: "firstName",
    Cell: ({ value }) => <DefaultCell value={value} />,
  },
  {
    Header: "Last Name",
    accessor: "lastName",
    Cell: ({ value }) => <DefaultCell value={value} />,
  },
  {
    Header: "Age",
    accessor: "age",
    Cell: ({ value }) => <DefaultCell value={value} />,
  },
  {
    Header: "Height",
    accessor: "height",
    Cell: ({ value }) => <DefaultCell value={value} />,
  },
  {
    Header: "Email",
    accessor: "email",
    Cell: ({ value }) => <DefaultCell value={value} />,
  },
  {
    Header: "Phone",
    accessor: "phone",
    Cell: ({ value }) => <DefaultCell value={value} />,
  },
  {
    Header: "Birth Date",
    accessor: "birthDate",
    Cell: ({ value }) => <DefaultCell value={moment(value).format("DD/MM/YYYY")} />,
  },
];

