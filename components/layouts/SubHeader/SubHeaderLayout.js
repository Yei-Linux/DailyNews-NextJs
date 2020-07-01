import React from "react";
import { Menu } from 'antd';

const SubHeaderLayout = () => {
  return (
    <div className="subHeaderContainer">
      <Menu mode="horizontal">
        <Menu.Item key="1">News</Menu.Item>
        <Menu.Item key="2">Comments</Menu.Item>
        <Menu.Item key="3">Ask</Menu.Item>
        <Menu.Item key="4">Job</Menu.Item>
      </Menu>
    </div>
  );
};

export default SubHeaderLayout;
