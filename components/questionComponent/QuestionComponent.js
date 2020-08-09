import React, { Fragment,useState } from "react";

import QuestionsTree from "../questionThreadComponent/questionThreadHeaderComponent/questionTreeComponent/QuestionsTree";

import { Comment, Avatar } from "antd";
import { parseFormatDate } from "../../helpers/DateHelper";
import { formatQuestionToUrlParam,getFieldOfUserInfo } from "../../helpers/ManagmentDataHelper";

import InputComment from "../inputComment/InputComment";
import { insertQuestion } from "../../services/commentsService";

import "./QuestionComponentStyle.scss";

import { Tag } from "antd";
import Link from "next/link";
import { useApolloClient } from "@apollo/client";

const Question = ({ item, type }) => {
  const client = useApolloClient();
  const [isComment,setIsComment] = useState(false);
  const handleAddComment = async (question) => {
      let response = await insertQuestion(client,question,"",getFieldOfUserInfo('id'),item._id);
      console.log(response);
  };

  return (
    <Comment
      author={
        <Fragment>
          <span>{item.user.userName}-</span>
          <span key="comment-nested-reply-to">
            Posted at: {parseFormatDate(item.createdAt)}
          </span>
        </Fragment>
      }
      actions={[
        type == "question" ? (
          <span key="comment-nested-reply-to">
            {item.numberComments} replies
          </span>
        ) : (
          <Fragment>
            <a className="addComment" onClick={()=>{setIsComment(true)}}>
              Add comment
            </a>
            {
              isComment && 
              <div>
              <Comment
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                }
                content={<InputComment handleAddComment={handleAddComment}/>}
              />
            </div>
            }
          </Fragment>
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
              <a>{item.comment}</a>
            </Link>
            <div>
              {item.tags &&
                item.tags.length > 0 &&
                item.tags.map((tag, index) => (
                  <Tag key={index} color={tag.color}>
                    {tag.name}
                  </Tag>
                ))}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>{item.comment}</p>
          </Fragment>
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
