import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = props => {
  const { sortedColumn, onSort, columns, data } = props;
  return (
    <table className="table">
      <TableHeader
        sortedColumn={sortedColumn}
        onSort={onSort}
        columns={columns}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
