import React, { useEffect } from "react";

import QuestionThreadHeader from "./questionThreadHeaderComponent/QuestionThreadHeader";
import QuestionThreadComments from "./questionThreadComments/QuestionThreadComments";

import { Card } from "antd";

const QuestionThread = () => {
  return (
    <Card title={<QuestionThreadHeader />} style={{ width: "100%" }}>
      <div>
        <p>I have a question, please a want to learn.</p>
      </div>
      <QuestionThreadComments />
    </Card>
  );
};

export default QuestionThread;
