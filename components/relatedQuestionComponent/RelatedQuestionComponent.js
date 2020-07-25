import React from "react";
import { Card } from "antd";

import Question from '../questionComponent/QuestionComponent';

const RelatedQuestions = () => {
  return (
    <Card title="Related Questions" style={{ width: '100%' }}>
      <Question
        item={{
          user: { userName: "jesus" },
          createdAt: "2020-07-12T00:52:16.215+00:00",
          numberComments: 4,
          comment: "Yeah , im ok"
        }}
      />
    </Card>
  );
};

export default RelatedQuestions;
