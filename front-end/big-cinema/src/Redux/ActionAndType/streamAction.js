import axios from "axios";
import { FAIL, FIND_STREAM } from "./Type";
export const add_straem =
  (_id, { movies }) =>
  async (dispatch) => {
    try {
      const data = new FormData();

      data.append("movies", movies);

      await axios.post(`/stream/${_id}`, data);
      dispatch(find_stream(_id));
    } catch (error) {
      dispatch({ type: FAIL, payload: error.response.data });
      console.log(error);
    }
  };
export const find_stream = (_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/stream/${_id}`);
    dispatch({ type: FIND_STREAM, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
