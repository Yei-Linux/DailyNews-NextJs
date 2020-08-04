import React, { Fragment } from "react";
import { Layout } from "antd";

import Head from "./Head/HeadLayout";
import HeaderLayout from "./Header/HeaderLayout";
import ContentLayout from "./Content/ContentLayout";
import FooterLayout from "./Footer/FooterLayout";
import SubHeaderLayout from "../layouts/SubHeader/SubHeaderLayout";

import CustomSpinner from "../shared/CustomSpinner/CustomSpinner";

const { Content } = Layout;

const MainLayout = ({ children , customStyles}) => {
  return (
    <Fragment>
      <Head />

      <Layout className="layout">
        <HeaderLayout />
        <SubHeaderLayout />
        <Content
          style={{ padding: "0 50px", height: "100%", position: "relative" }}
        >
          <ContentLayout customStyles={customStyles}>{children}</ContentLayout>
          <CustomSpinner />
        </Content>
        <FooterLayout />
      </Layout>
    </Fragment>
  );
};

export default MainLayout;
