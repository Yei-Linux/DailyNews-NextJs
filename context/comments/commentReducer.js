import {
  SET_PARENT_STATE,
  SET_TREE_COMMENTS_STATE,
  SET_SKIP,
  UPDATE_TREE_COMMENTS,
  SET_QUESTION_ID,
  SET_TOTAL_FIRST_LEVEL
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_PARENT_STATE:
      return {
        ...state,
        parentState: action.payload
      };
    case SET_TREE_COMMENTS_STATE:
      return {
        ...state,
        treeCommentsState: action.payload
      };
    case SET_SKIP:
      return {
        ...state,
        skip: action.payload
      };
    case SET_QUESTION_ID:
      return {
        ...state,
        questionIdState: action.payload
      };
    case SET_TOTAL_FIRST_LEVEL:
      return {
        ...state,
        totalFirstLevelChildrenState: action.payload
      };
    case UPDATE_TREE_COMMENTS:
      return {
        ...state,
        treeCommentsState: [...state.treeCommentsState, ...action.payload]
      };
    default:
      return state;
  }
};
