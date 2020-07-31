import React from "react";
import { Menu } from "antd";

import Link from "next/link";

import "./subHeaderStyle.scss";

const SubHeaderLayout = () => {
  return (
    <div className="subHeaderContainer">
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link href="/"><a>News</a></Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/ask"><a>Ask</a></Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/job"><a>Job</a></Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SubHeaderLayout;
