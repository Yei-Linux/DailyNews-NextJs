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
          {
            parentElement.tags.map( tag=>(
              <Tag color={tag.color}>{tag.name}</Tag>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default QuestionThreadHeader;
