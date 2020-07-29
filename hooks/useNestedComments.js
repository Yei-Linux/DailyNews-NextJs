import React, { useContext,useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import contextComment from "../context/comments/commentContext";

import { getTreeOfCommentsByParent,getTotalFirstLevelChildren } from "../services/commentsService";
import { buildingNestedComments } from "../helpers/ManagmentDataHelper";

const useNestedComments = () => {
  const client = useApolloClient();
  const {
    parentState,
    setParentState,
    treeCommentsState,
    setTreeCommentsState,
    updateTreeCommentsState,
    questionIdState,
    setQuestionId,
    skip,
    setSkipState,
    totalFirstLevelChildrenState,
    setTotalFirstLevel
  } = useContext(contextComment);



  const updateSetSkipState = (newSkip) => {
    setSkipState(newSkip);
  };

  const updateQuestionId = (newQuestionId) => {
    setQuestionId(newQuestionId);
  }

  const handleGetAndBuildingComments = async () => {
    let data = await getTreeOfCommentsByParent(client, questionIdState, skip);
    let totalFirstLevelChildren = await getTotalFirstLevelChildren(client,questionIdState);
    buildingTreeComments(data);
    setTotalFirstLevel(totalFirstLevelChildren.getFirstLevelChildrenByParentId.total);
  };

  const buildingTreeComments = (data) => {
    if (data != undefined) {
      let { parentElement, treeBuilt } = buildingNestedComments(data,questionIdState);

      if (skip == 0) {
        setParentState(parentElement);
        setTreeCommentsState(treeBuilt);
      } else {
        updateTreeCommentsState(treeBuilt);
      }
    }
  };

  return {
    parentState,
    treeCommentsState,
    skip,
    questionIdState,
    handleGetAndBuildingComments,
    updateSetSkipState,
    updateQuestionId,
    totalFirstLevelChildrenState
  };
};

export default useNestedComments;