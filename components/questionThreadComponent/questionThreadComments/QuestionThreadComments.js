import React, { useEffect } from "react";

import { Comment, Avatar, Button } from "antd";
import { useApolloClient } from "@apollo/client";

import QuestionTree from "../questionThreadHeaderComponent/questionTreeComponent/QuestionsTree";
import InputComment from "../../inputComment/InputComment";

import usePrevious from "../../../hooks/usePrevious";
import useNestedComments from "../../../hooks/useNestedComments";

import { insertQuestion } from "../../../services/commentsService";
import { getFieldOfUserInfo } from "../../../helpers/ManagmentDataHelper";

const QuestionThreadComments = () => {
  const {
    parentState,
    treeCommentsState,
    skip,
    totalFirstLevelChildrenState,
    handleGetAndBuildingComments,
    updateSetSkipState
  } = useNestedComments();
  const client = useApolloClient();
  const prevSkip = usePrevious(skip);

  useEffect(() => {
    validateSkipIsDefinedAndPrevCurrentNotEquals() && fetchComments();
  }, [skip]);

  const handleLoadMoreComments = async () => {
    updateSetSkipState(skip + 1);
  };

  const validateSkipIsDefinedAndPrevCurrentNotEquals = () => {
    return prevSkip != undefined && prevSkip !== skip;
  };

  const handleAddComment = async (question) => {
      let response = await insertQuestion(client,question,"",getFieldOfUserInfo('id'),parentState._id);
      console.log(response);
  };

  const fetchComments = async () => {
    await handleGetAndBuildingComments();
  };

  const isTotalEqualsToCurrentLengthState = () => {
    return totalFirstLevelChildrenState == treeCommentsState.length;
  };

  return (
    <div>
      <h3>{parentState.numberComments} comments</h3>
      <div>
        <QuestionTree commentsTree={treeCommentsState} />

        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={<InputComment  handleAddComment={handleAddComment}/>}
        />

        {treeCommentsState.length > 0 && !isTotalEqualsToCurrentLengthState() && (
          <Button type="primary" onClick={handleLoadMoreComments}>
            Load More Comments
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionThreadComments;
