import React, {Fragment} from 'react';
import { Layout } from 'antd';

import Head from './Head/HeadLayout';
import HeaderLayout from './Header/HeaderLayout';
import ContentLayout from './Content/ContentLayout';
import FooterLayout from './Footer/FooterLayout';
import SubHeaderLayout from '../layouts/SubHeader/SubHeaderLayout';

const MainLayout = ({ children}) => {
    return (
        <Fragment>
            <Head />
            <Layout className="layout">
                <HeaderLayout />
                <SubHeaderLayout /> 
                <ContentLayout children={children} />
                <FooterLayout />
            </Layout>
        </Fragment>

    );
}
 
export default MainLayout;