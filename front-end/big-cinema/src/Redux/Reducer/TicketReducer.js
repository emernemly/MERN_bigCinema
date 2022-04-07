import { GET_TECKET } from "../ActionAndType/Type";

const init = {
  tickets: {},
};
const TicketReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_TECKET:
      return { ...state, tickets: payload.ticket };

    default:
      return state;
  }
};

export default TicketReducer;
