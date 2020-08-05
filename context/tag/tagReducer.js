import {
    SET_TAGS
  } from "../types";
  
  export default (state, action) => {
    switch (action.type) {
      case SET_TAGS:
        return {
          ...state,
          tags: action.payload
        };
      default:
        return state;
    }
  };
  