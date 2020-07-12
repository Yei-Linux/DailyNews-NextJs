import React from "react";

import { Comment, Avatar } from 'antd';
import { parseFormatDate } from '../../helpers/DateHelper';

const Question = ({ item }) => {
  return (
    <Comment
      author={<span>{item.user.userName}</span>}
      actions={[
        <span key="comment-nested-reply-to">Posted at: {parseFormatDate(item.createdAt)}</span>,
        <span key="comment-nested-reply-to">{item.numberComments} replies</span>
      ]}
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      content={<a> {item.comment}</a>}
    ></Comment>
  );
};

export default Question;
