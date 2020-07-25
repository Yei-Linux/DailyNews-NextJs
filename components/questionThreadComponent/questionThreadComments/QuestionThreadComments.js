import React from "react";

import { Comment, Avatar } from "antd";

import Question from "../../questionComponent/QuestionComponent";
import InputComment from "../../inputComment/InputComment";

const QuestionThreadComments = () => {
  return (
    <div>
      <h3>2 comments</h3>
      <div>
        <Question
          item={{
            user: { userName: "jesus" },
            createdAt: "2020-07-12T00:52:16.215+00:00",
            numberComments: 4,
            comment: "Yeah , im ok"
          }}
        />

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
