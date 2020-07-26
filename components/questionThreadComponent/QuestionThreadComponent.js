import React, { useEffect } from "react";

import QuestionThreadHeader from "./questionThreadHeaderComponent/QuestionThreadHeader";
import QuestionThreadComments from "./questionThreadComments/QuestionThreadComments";

import { Card } from "antd";
import './QuestionThreadHeaderStyle.scss';

const QuestionThread = ({ parentElement, treeBuilt }) => {
  return (
    <Card
      title={<QuestionThreadHeader parentElement={parentElement} />}
      style={{ width: "100%" }}
    >
      <div className="descriptionQuestionContainer">
        <p className="description">{parentElement.description}</p>
      </div>
      <QuestionThreadComments
        treeBuilt={treeBuilt}
        numberComments={parentElement.numberComments}
      />
    </Card>
  );
};

export default QuestionThread;
