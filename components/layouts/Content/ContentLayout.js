import React from "react";
import { Layout } from 'antd';

const { Content } = Layout;

const ContentLayout = ({children}) => {
  return (
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">
          {children}
      </div>
    </Content>
  );
};

export default ContentLayout;
