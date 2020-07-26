import React from "react";

import { Comment, Avatar } from "antd";

import QuestionTree from '../questionThreadHeaderComponent/questionTreeComponent/QuestionsTree';
import InputComment from "../../inputComment/InputComment";

const QuestionThreadComments = ({ numberComments, treeBuilt }) => {

  return (
    <div>
      <h3>{numberComments} comments</h3>
      <div>
        <QuestionTree commentsTree={treeBuilt}/>

        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={<InputComment />}
        />
      </div>
    </div>
  );
};

export default QuestionThreadComments;
