import React from "react";

import { Comment, Avatar } from "antd";
import { parseFormatDate } from "../../helpers/DateHelper";
import { formatQuestionToUrlParam } from '../../helpers/ManagmentDataHelper';

import Link from "next/link";

const Question = ({ item }) => {
  return (
    <Comment
      author={<span>{item.user.userName}</span>}
      actions={[
        <span key="comment-nested-reply-to">
          Posted at: {parseFormatDate(item.createdAt)}
        </span>,
        <span key="comment-nested-reply-to">{item.numberComments} replies</span>
      ]}
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      content={
        <Link href="/question/[questionId]/[question]" as={`/question/${item._id}/${formatQuestionToUrlParam(item.comment)}`}>
          {item.comment}
        </Link>
      }
    ></Comment>
  );
};

export default Question;
