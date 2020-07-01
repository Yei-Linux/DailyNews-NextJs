import React from "react";
import { Layout, Input , Button  } from "antd";

import "./HeaderStyle.scss";

const { Search } = Input;
const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <Header className="headerContainer">
      <div className="leftContainer"></div>
      <div className="rightContainer">
        <Search
          className="searchInput"
          placeholder="Search..."
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <Button className="buttonSignIn">Sign In</Button>
      </div>
    </Header>
  );
};

export default HeaderLayout;
