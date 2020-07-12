import React from "react";
import { Menu } from "antd";

import Link from "next/link";

import "./subHeaderStyle.scss";

const SubHeaderLayout = () => {
  return (
    <div className="subHeaderContainer">
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link href="/">News</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/ask">Ask</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/job">Job</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SubHeaderLayout;
