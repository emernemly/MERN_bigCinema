import { ALL_CINEMA, CIMA, IMAGE, MY_CINIMA } from "../ActionAndType/Type";

const init = {
  cinema: [],
  cima: {},
  objImage: [],
};
const cinemaReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ALL_CINEMA:
      return { ...state, cinema: payload.allcinema };
    case MY_CINIMA:
      return { ...state, cinema: payload.myCinema };
    case CIMA:
      return { ...state, cima: payload.cinema };

    default:
      return state;
  }
};

export default cinemaReducer;
