import React, { useEffect } from "react";

import { Comment, Avatar, Button } from "antd";

import QuestionTree from "../questionThreadHeaderComponent/questionTreeComponent/QuestionsTree";
import InputComment from "../../inputComment/InputComment";

import usePrevious from "../../../hooks/usePrevious";
import useNestedComments from "../../../hooks/useNestedComments";

const QuestionThreadComments = () => {
  const {
    parentState,
    treeCommentsState,
    skip,
    totalFirstLevelChildrenState,
    handleGetAndBuildingComments,
    updateSetSkipState
  } = useNestedComments();
  const prevSkip = usePrevious(skip);

  const handleLoadMoreComments = async () => {
    updateSetSkipState(skip + 1);
  };

  useEffect(() => {
    validateSkipIsDefinedAndPrevCurrentNotEquals() && fetchComments();
  }, [skip]);

  const validateSkipIsDefinedAndPrevCurrentNotEquals = () => {
    return prevSkip != undefined && prevSkip !== skip;
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
          content={<InputComment />}
        />

        {!isTotalEqualsToCurrentLengthState() && (
          <Button type="primary" onClick={handleLoadMoreComments}>
            Load More Comments
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionThreadComments;
