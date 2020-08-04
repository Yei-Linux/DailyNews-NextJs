import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const ContentLayout = ({ children, customStyles }) => {
  return (
    <Content
      style={customStyles}
    >
      <div className="site-layout-content" style={{ height: "100%" }}>
        {children}
      </div>
    </Content>
  );
};

export default ContentLayout;
