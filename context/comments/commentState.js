import React, { useReducer } from "react";
import contextComment from "./commentContext";
import commentReducer from "./commentReducer";
import { SET_TOTAL_FIRST_LEVEL,SET_PARENT_STATE, SET_TREE_COMMENTS_STATE, SET_SKIP, UPDATE_TREE_COMMENTS, SET_QUESTION_ID } from "../types";

function CommentState(props) {
  const initialState = {
    parentState: null,
    treeCommentsState: [],
    skip: 0,
    questionIdState: "",
    totalFirstLevelChildrenState: 0,
  };

  const [state, dispatch] = useReducer(commentReducer, initialState);

  const setParentState = data => {
    dispatch({
      type: SET_PARENT_STATE,
      payload: data
    });
  };

  const setTotalFirstLevel = data => {
    dispatch({
      type: SET_TOTAL_FIRST_LEVEL,
      payload: data
    });
  };


  const setQuestionId = data => {
    dispatch({
      type: SET_QUESTION_ID,
      payload: data
    });
  };

  const setTreeCommentsState = data => {
    dispatch({
        type: SET_TREE_COMMENTS_STATE,
        payload: data
    });
  }

  const updateTreeCommentsState = data => {
    dispatch({
        type: UPDATE_TREE_COMMENTS,
        payload: data
    });
  }

  const setSkipState = data => {
    dispatch({
        type: SET_SKIP,
        payload: data
    });
  }

  return (
    <contextComment.Provider
      value={{
        parentState: state.parentState,
        treeCommentsState: state.treeCommentsState,
        skip: state.skip,
        questionIdState: state.questionIdState,
        totalFirstLevelChildrenState: state.totalFirstLevelChildrenState,
        setParentState,
        setTreeCommentsState,
        updateTreeCommentsState,
        setSkipState,
        setQuestionId,
        setTotalFirstLevel
      }}
    >
      {props.children}
    </contextComment.Provider>
  );
}

export default CommentState;
