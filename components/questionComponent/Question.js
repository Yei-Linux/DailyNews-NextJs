import React from "react";

const Question = ({ question }) => {
  return (
    <Comment
      author={<a>{question.user}</a>}
      actions={[
        <span key="comment-nested-reply-to">{question.createdAt}</span>,
        <span key="comment-nested-reply-to">{question.comments}</span>
      ]}
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      content={<p>{question.comment}</p>}
    ></Comment>
  );
};

export default Question;
