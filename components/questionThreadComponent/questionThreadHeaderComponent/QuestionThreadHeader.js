import React from "react";

import { Tag, Avatar } from "antd";

import { parseFormatDate } from "../../../helpers/DateHelper";
import "./QuestionThreadHeaderStyle.scss";

const QuestionThreadHeader = ({ parentElement }) => {
  return (
    <div className="questionHeader">
      <div className="userContainer">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>

      <div className="questionContainer">
        <h5>{parentElement.comment}</h5>
        <p className="postDate">
          Asked by {parentElement.user.userName} on{" "}
          {parseFormatDate(parentElement.createdAt)}
        </p>
        <div className="tagsContainer">
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
        </div>
      </div>
    </div>
  );
};

export default QuestionThreadHeader;
