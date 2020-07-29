import React,{ Fragment } from "react";

import QuestionsTree from "../questionThreadComponent/questionThreadHeaderComponent/questionTreeComponent/QuestionsTree";

import { Comment, Avatar } from "antd";
import { parseFormatDate } from "../../helpers/DateHelper";
import { formatQuestionToUrlParam } from "../../helpers/ManagmentDataHelper";

import "./QuestionComponentStyle.scss";

import { Tag } from "antd";
import Link from "next/link";

const Question = ({ item, type }) => {
  const handleAddComment = () => {
    console.log("Launch modal");
  };

  return (
    <Comment 
      author={<span>{item.user.userName}</span>}
      actions={[
        <span key="comment-nested-reply-to">
          Posted at: {parseFormatDate(item.createdAt)}
        </span>,
        type == "question" ? (
          <span key="comment-nested-reply-to">
            {item.numberComments} replies
          </span>
        ) : (
          <a className="addComment" onClick={handleAddComment}>
            Add comment
          </a>
        )
      ]}
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      content={
        type == "question" ? (
          <Fragment>
            <Link
              href="/question/[questionId]/[question]"
              as={`/question/${item._id}/${formatQuestionToUrlParam(
                item.comment
              )}`}
            >
              {item.comment}
            </Link>
            <div>
              { item.tags && item.tags.length > 0 && item.tags.map((tag,index) => (
                <Tag key={index} color={tag.color}>{tag.name}</Tag>
              ))}
            </div>
          </Fragment>
        ) : (
          <p>{item.comment}</p>
        )
      }
    >
      {item.comments !== undefined && item.comments.length > 0 && (
        <QuestionsTree commentsTree={item.comments} />
      )}
    </Comment>
  );
};

export default Question;
