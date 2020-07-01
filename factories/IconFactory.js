import React from "react";
import { Space } from "antd";

export const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
