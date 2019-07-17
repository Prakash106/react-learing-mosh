import React from "react";
import Form from "./common/Form";
import { getGenres } from "../services/genre";
import { getMovie, saveMovie } from "../services/movies";
import Joi from "@hapi/joi";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      release: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    title: Joi.string().required(),
    genre: Joi.string().required(),
    release: Joi.number()
      .max(2020)
      .min(1900)
      .required()
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({
      genres
    });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(Number(movieId));
    if (!movie) return this.props.history.replace("/404");

    this.setState({
      data: this.mapToViewModel(movie)
    });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genre: movie.genre,
      release: movie.release
    };
  }

  doSubmit() {
    saveMovie(this.state.data);
    this.props.history.replace("/movieApp");
  }

  render() {
    return (
      <React.Fragment>
        <h1>Movie {this.props.match.params.id}</h1>
        <form className="form" onSubmit={this.handelSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", this.state.genres)}
          {this.renderInput("release", "Release")}
          {this.renderButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
