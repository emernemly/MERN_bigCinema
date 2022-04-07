import { FIND_STREAM } from "../ActionAndType/Type";

const init = {
  moviesStream: {},
};
const streamReducer = (state = init, { type, payload }) => {
  switch (type) {
    case FIND_STREAM:
      return { ...state, moviesStream: payload.movies };

    default:
      return state;
  }
};

export default streamReducer;
