import axios from "axios";
import { ALL_CINEMA, CIMA, FAIL, MY_CINIMA } from "./Type";
//----------------TO GET ALL CINEMA----------------
export const all_cinema = () => async (dispatch) => {
  const config = {
    headers: { authentication: localStorage.getItem("token") },
  };
  try {
    const res = await axios.get("/cinema", config);

    dispatch({ type: ALL_CINEMA, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//-----------------TO GET MOVIES FOR OWN CINEMA----------------
export const my_cinema = () => async (dispatch) => {
  const config = {
    headers: { authentication: localStorage.getItem("token") },
  };
  try {
    const res = await axios.get("/cinema/myCinema", config);
    dispatch({ type: MY_CINIMA, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const add_cinema =
  ({ cinema_Name, image, countries, rate }) =>
  async (dispatch) => {
    const config = {
      headers: { authentication: localStorage.getItem("token") },
    };
    try {
      const data = new FormData();
      data.append("cinema_Name", cinema_Name);
      data.append("image", image);
      data.append("countries", countries);
      data.append("rate", rate);
      await axios.post("/cinema", data, config);
      dispatch(my_cinema());
    } catch (error) {
      dispatch({ type: FAIL, payload: error.response.data });
    }
  };

export const delete_cinema = (id) => async (dispatch) => {
  const config = {
    headers: { authentication: localStorage.getItem("token") },
  };
  try {
    await axios.delete(`/cinema/${id}`, config);
    dispatch(my_cinema());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const edditCinema =
  (id, { cinema_Name, image, countries, rate }) =>
  async (dispatch) => {
    const config = {
      headers: { authentication: localStorage.getItem("token") },
    };
    try {
      const data = new FormData();
      data.append("cinema_Name", cinema_Name);
      data.append("image", image);
      data.append("countries", countries);
      data.append("rate", rate);
      await axios.put(`/cinema/${id}`, data, config);
      dispatch(my_cinema());
    } catch (error) {
      dispatch({ type: FAIL, payload: error.response.data });
    }
  };
export const edditCinemaimage =
  (id, { cinema_Name, image, countries, rate }) =>
  async (dispatch) => {
    const config = {
      headers: { authentication: localStorage.getItem("token") },
    };
    try {
      const data = new FormData();
      data.append("cinema_Name", cinema_Name);
      data.append("image", image);
      data.append("countries", countries);
      data.append("rate", rate);
      await axios.put(`image/cinema/${id}`, data, config);
      dispatch(my_cinema());
    } catch (error) {
      dispatch({ type: FAIL, payload: error.response.data });
    }
  };
export const cima_find = (id) => async (dispatch) => {
  try {
    const cima = await axios.get(`/cinema/${id}`);
    dispatch({ type: CIMA, payload: cima.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
