import React, { Component } from "react";
import Heart from "./common/heart";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MovieTable extends Component {
  columns = [
    {
      path: "title",
      name: "Title",
      content: movie => <Link to={`/movieForm/${movie._id}`}>{movie.title}</Link>
    },
    {
      path: "genre",
      name: "Genre"
    },
    {
      path: "release",
      name: "Release"
    },
    {
      key: "like",
      content: movie => (
        <Heart
          onLike={this.props.handelLike}
          id={movie._id}
          isLiked={movie.isLiked}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.handelDelete(movie._id)}
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onSort, sortedColumn } = this.props;
    return <Table data={movies} columns={this.columns} onSort={onSort} sortedColumn={sortedColumn}/>;
  }
}

export default MovieTable;
