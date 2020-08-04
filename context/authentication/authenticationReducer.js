import { SET_IS_LOGGING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_IS_LOGGING:
      return {
        ...state,
        isLogging: action.payload
      };
    default:
      return state;
  }
};
