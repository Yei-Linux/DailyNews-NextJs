import React from "react";

import { Tag, Avatar } from "antd";

const QuestionThreadHeader = () => {
  return (
    <div>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <div>
        <h2>Are you ok?</h2>
        <div>
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
        </div>
      </div>
    </div>
  );
};

export default QuestionThreadHeader;
