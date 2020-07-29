import React, { useEffect } from "react";

import QuestionThreadHeader from "./questionThreadHeaderComponent/QuestionThreadHeader";
import QuestionThreadComments from "./questionThreadComments/QuestionThreadComments";

import { Card } from "antd";
import './QuestionThreadHeaderStyle.scss';

import useNestedComments from '../../hooks/useNestedComments';

const QuestionThread = () => {
  const { parentState } = useNestedComments();

  return (
    <Card
      title={<QuestionThreadHeader parentElement={parentState} />}
      style={{ width: "100%" }}
    >
      <div className="descriptionQuestionContainer">
        <p className="description">{parentState.description}</p>
      </div>
      <QuestionThreadComments/>
      
    </Card>
  );
};

export default QuestionThread;
