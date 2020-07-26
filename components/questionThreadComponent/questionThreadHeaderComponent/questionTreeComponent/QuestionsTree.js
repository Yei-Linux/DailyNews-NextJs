import React, { Fragment } from "react";

import Question from '../../../questionComponent/QuestionComponent';

const QuestionsTree = ({ commentsTree }) => {
  return (
    <Fragment>
      {commentsTree.length > 0 &&
        commentsTree.map(comment => (
          <Question key={comment._id} item={comment} type={'comment'}/>
        ))}
    </Fragment>
  );
};

export default QuestionsTree;
