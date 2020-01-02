export let movies = [
  {
    id: 0,
    name: "wintercastel",
    score: 1
  },
  {
    id: 1,
    name: "lovelive",
    score: 99
  },
  {
    id: 2,
    name: "god's 1 su",
    score: 0
  }
];

export const getById = id => {
  const filteredMovies = movies.filter(movie => id === movie.id);
  return filteredMovies[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  const cleanMovies = movies.filter(movie => id !== movie.id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};
