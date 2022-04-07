import { ALL_MOVIES, FAIL, MY_MOVIES, OWN_MOVIE } from "./Type";
import axios from "axios";
export const my_movies = (_id) => async (dispatch) => {
  const config = {
    headers: { authentication: localStorage.getItem("token") },
  };
  try {
    const res = await axios.get(`/movies/mymovies/${_id}`, config);
    dispatch({ type: MY_MOVIES, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const add_movies =
  (
    _id,
    {
      moviesName,
      image,
      region,
      category,
      description,
      timeMovies,
      rating,
      movies,
    }
  ) =>
  async (dispatch) => {
    const config = {
      headers: { authentication: localStorage.getItem("token") },
    };
    try {
      const data = new FormData();
      data.append("moviesName", moviesName);
      data.append("image", image);
      data.append("region", region);
      data.append("category", category);
      data.append("description", description);
      data.append("timeMovies", timeMovies);
      data.append("rating", rating);
      data.append("movies", movies);

      await axios.post(`/movies/${_id}`, data, config);
      dispatch(my_movies(_id));
    } catch (error) {
      dispatch({ type: FAIL, payload: error.response.data });
      console.log(error);
    }
  };
export const delete_movies = (_id, idCinema) => async (dispatch) => {
  try {
    await axios.delete(`/movies/${_id}`);
    dispatch(my_movies(idCinema));
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const update_movies =
  (
    _id,
    idmovies,
    { moviesName, image, region, category, description, timeMovies, rating }
  ) =>
  async (dispatch) => {
    try {
      const data = new FormData();
      data.append("moviesName", moviesName);
      data.append("image", image);
      data.append("region", region);
      data.append("category", category);
      data.append("description", description);
      data.append("timeMovies", timeMovies);
      data.append("rating", rating);
      await axios.put(`/movies/${_id}`, data);
      dispatch(my_movies(idmovies));
    } catch (error) {
      dispatch({ type: FAIL, payload: error.response.data });
    }
  };
export const all_movies = () => async (dispatch) => {
  const config = {
    headers: { authentication: localStorage.getItem("token") },
  };
  try {
    const res = await axios.get("/movies", config);
    dispatch({ type: ALL_MOVIES, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const own_movie = (_id) => async (dispatch) => {
  const config = {
    headers: { authentication: localStorage.getItem("token") },
  };
  try {
    const res = await axios.get(`/movies/${_id}`, config);
    dispatch({ type: OWN_MOVIE, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
