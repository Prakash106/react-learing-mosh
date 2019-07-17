import React, { Component } from "react";
import Movie from "./components/movie";
import Movies from "./services/movies";
import Navbar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import PageNotFound from "./components/404";
import Customer from "./components/customer";
import Employee from "./components/employee";
import MovieForm from "./components/movieForm";
import Register from "./components/Register";
import Posts from "./components/Posts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    movies: Movies
  };

  handelDelete = id => {
    const movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({
      movies
    });
  };

  onLiked = id => {
    const movies = this.state.movies.map(movie => {
      if (movie._id === id) {
        movie.isLiked = !movie.isLiked;
        return movie;
      }
      return movie;
    });
    this.setState({
      movies
    });
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar />
        <div className="container-fluid mt-3">
          <Switch>
            <Route
              path="/app/:appName?"
              render={props => (
                <Movie
                  {...props}
                  movies={this.state.movies}
                  onLike={this.onLiked}
                  onDelete={this.handelDelete}
                />
              )}
            />
            <Redirect from="/" exact to="/login" />
            <Redirect from="/movieApp" to="/app/movieApp" />
            <Route path="/customer" component={Customer} />
            <Route path="/employee" component={Employee} />
            <Route path="/movieForm/:id" component={MovieForm} />
            <Route path="/movieForm/new" component={MovieForm} />
            <Route path="/404" component={PageNotFound} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/posts" component={Posts} />
            <Redirect to="404" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
