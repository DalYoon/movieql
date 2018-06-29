export let movies = [
  {
    id: 1,
    name: "arrival",
    score: 4
  },
  {
    id: 2,
    name: "madmax",
    score: 3
  },
  {
    id: 3,
    name: "shape of water",
    score: 5
  },
  {
    id: 4,
    name: "deadpool",
    score: 1
  },
  {
    id: 5,
    name: "antman",
    score: 4
  },
  {
    id: 6,
    name: "help",
    score: 4
  },
  {
    id: 7,
    name: "inception",
    score: 3
  },
  {
    id: 8,
    name: "interstellar",
    score: 4
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
