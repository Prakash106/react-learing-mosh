import React, { Component } from "react";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "../components/common/ListGroup";
import genres from "../services/genre";
import MovieTable from "../components/movieTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/SearchBox";

class Movie extends Component {
  state = {
    pageSize: 4,
    sortColumn: {
      path: "title",
      order: "asc"
    },
    currentPage: 1,
    genres: genres,
    searchQuery: "",
    currentGenre: "All"
  };

  handelPageChange = currentPage => {
    this.setState({
      currentPage
    });
  };

  handelSort = sortColumn => {
    this.setState({
      sortColumn
    });
  };

  handelSelect = currentGenre => {
    this.setState({
      currentGenre,
      currentPage: 1
    });
  };

  paginateData() {
    const {
      currentPage,
      searchQuery,
      pageSize,
      currentGenre,
      sortColumn
    } = this.state;

    let allMovies = this.props.movies;
    var filtered = allMovies;

    if (searchQuery) {
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (currentGenre && currentGenre !== "All") {
      filtered = allMovies.filter(m => m.genre === currentGenre);
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { movies, filtered };
  }

  homeback = () => {
    this.props.history.replace("/");
  };

  searchQuery = query => {
    this.setState({
      searchQuery: query,
      selectedGenre: null,
      currentPage: 1
    });
  };

  render() {
    const { onLike, onDelete } = this.props;

    const {
      currentPage,
      pageSize,
      genres,
      currentGenre,
      sortColumn,
      searchQuery
    } = this.state;

    const { movies, filtered } = this.paginateData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            selectedGenre={currentGenre}
            handelItemSelect={this.handelSelect}
            genres={genres}
          />
        </div>
        <div className="col">
          <h2 className="display-4">{this.props.match.params.appName}</h2>
          <Link to="/movieForm/new" className="btn btn-primary">
            Add New
          </Link>
          <hr />
          <p>Total number of movies {movies.length}</p>
          <SearchBox value={searchQuery} handelChange={this.searchQuery} />
          <MovieTable
            sortedColumn={sortColumn}
            movies={movies}
            handelDelete={onDelete}
            onSort={this.handelSort}
            handelLike={onLike}
          />
          <Pagination
            currentPage={currentPage}
            onPageChange={this.handelPageChange}
            totalCount={filtered.length}
            pageSize={pageSize}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
