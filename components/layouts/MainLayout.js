import React, { Fragment } from "react";
import { Layout } from "antd";
import { useRouter } from "next/router";

import Head from "./Head/HeadLayout";
import HeaderLayout from "./Header/HeaderLayout";
import ContentLayout from "./Content/ContentLayout";
import FooterLayout from "./Footer/FooterLayout";
import SubHeaderLayout from "../layouts/SubHeader/SubHeaderLayout";

import { SignContainer } from "./layoutsStyledComponents"; 

const MainLayout = ({ children }) => {
  const router = useRouter();
  return (
    <Fragment>
      <Head />

      {router.pathname === "/sign-in" || router.pathname === "/sign-up" ? (
          <SignContainer>{children}</SignContainer>
      ) : (
        <Layout className="layout">
          <HeaderLayout />
          <SubHeaderLayout />
          <ContentLayout children={children} />
          <FooterLayout />
        </Layout>
      )}
    </Fragment>
  );
};

export default MainLayout;
