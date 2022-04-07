import axios from "axios";
import { FAIL, GET_TECKET } from "./Type";
export const get_ticket = () => async (dispatch) => {
  const config = {
    headers: { authentication: localStorage.getItem("token") },
  };
  try {
    const res = await axios.get("/ticket", config);
    dispatch({ type: GET_TECKET, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
    console.log(error);
  }
};
export const add_ticket = (_id) => async (dispatch) => {
  const config = {
    headers: { authentication: localStorage.getItem("token") },
  };
  console.log(config);
  try {
    await axios.post(`/ticket/${_id}`, null, config);
    dispatch(get_ticket());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
    console.log(error);
  }
};
