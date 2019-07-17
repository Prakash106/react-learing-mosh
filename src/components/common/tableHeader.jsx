import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = this.props.sortedColumn;
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortedColumn } = this.props;
    if(sortedColumn.path !== column.path ) return null;
    if(sortedColumn.order === "asc" ) return <i className="fa fa-sort-asc"></i>
    return <i className="fa fa-sort-desc"></i>;
  }

  render() {
    return (
      <thead className="thead-dark">
        <tr>
          {this.props.columns.map(column => (
            <th
              onClick={() => this.raiseSort(column.path)}
              key={column.path || column.key}
            >
              {column.name} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
