const movies = [
  {
    _id: 1,
    title: "X-man",
    isLiked: false,
    genre: "Sci-fi",
    release: "2018"
  },
  {
    _id: 2,
    title: "Avengers",
    isLiked: false,
    genre: "Action",
    release: "2018"
  },
  {
    _id: 3,
    title: "Matrix",
    isLiked: true,
    genre: "Sci-fi",
    release: "2018"
  },
  {
    _id: 4,
    title: "Love per square foot",
    genre: "Love",
    isLiked: false,
    release: "2017"
  },
  {
    _id: 5,
    title: "Notebook",
    isLiked: false,
    genre: "Romantic",
    release: "2012"
  }
];

export function getAllMovies() {
  return movies;
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = movie.genre;
  movieInDb.release = movie.release;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
  }
  movies.push(movieInDb);
  return movieInDb;
}

export function getMovie(id) {
  const movie = movies.filter(m => m._id == id)[0];
  return movie;
}

export default movies;
