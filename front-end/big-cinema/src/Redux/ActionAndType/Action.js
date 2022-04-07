import axios from "axios";
import { FAIL, LOGOUT, USERTOKEN, USER_SIGNIN, USER_SIGNUP } from "./Type";
//-------------------- SIGN UP----------------
export const user_signup = (data, naviget) => async (dispatch) => {
  try {
    const res = await axios.post("/user/signUP", data);

    dispatch({ type: USER_SIGNUP, payload: res.data });
    naviget("/listCinema");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//-----------------SIGN IN -------------------------
export const user_signin = (data, naviget) => async (dispatch) => {
  try {
    const res = await axios.post("/user/signIN", data);
    dispatch({ type: USER_SIGNIN, payload: res.data });
    naviget("/listCinema");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//---------------------LOGOUT-------------------
export const logout = () => {
  return { type: LOGOUT };
};
//-------------------------GET USER TOKEN---------------
export const usertoken = () => async (dispatch) => {
  const config = {
    headers: { authentication: localStorage.getItem("token") },
  };
  try {
    const res = await axios.get("/user/myUser", config);
    dispatch({ type: USERTOKEN, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
