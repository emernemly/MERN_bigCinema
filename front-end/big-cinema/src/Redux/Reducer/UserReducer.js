import {
  FAIL,
  LOGOUT,
  USERTOKEN,
  USER_SIGNIN,
  USER_SIGNUP,
} from "../ActionAndType/Type";

const init = {
  user: {},
  err: [],
};

const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP:
    case USER_SIGNIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null };
    case FAIL:
      return { ...state, err: payload.errors, user: null };
    case USERTOKEN:
      return { ...state, user: payload };
    default:
      return state;
  }
};
export default userReducer;
