import React, { Component } from "react";

class TableBody extends Component {
  renderCell(item, col) {
    if (col.content) return <td key={col.key || col.path}>{col.content(item)}</td>;
    return <td key={col.path}>{item[col.path]}</td>;
  }

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
          {columns.map(col => this.renderCell(item, col))}</tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
