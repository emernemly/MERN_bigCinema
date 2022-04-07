import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import cinemaReducer from "./CinemaReducer";
import moviesReducer from "./moviesReducer";
import streamReducer from "./streamReducer";
import TicketReducer from "./TicketReducer";
const rootReducer = combineReducers({
  userReducer,
  cinemaReducer,
  moviesReducer,
  streamReducer,
  TicketReducer,
});
export default rootReducer;
