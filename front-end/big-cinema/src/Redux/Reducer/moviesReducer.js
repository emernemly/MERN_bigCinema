import {
  ADD_MOVIES,
  ALL_MOVIES,
  MY_MOVIES,
  OWN_MOVIE,
} from "../ActionAndType/Type";

const init = {
  movies: [],
  movie: [],
};
const moviesReducer = (state = init, { type, payload }) => {
  switch (type) {
    case MY_MOVIES:
      return { ...state, movies: payload.movies };
    case ALL_MOVIES:
      return { ...state, movies: payload.movies };
    case OWN_MOVIE:
      return { ...state, movie: payload.movie };
    default:
      return state;
  }
};

export default moviesReducer;
