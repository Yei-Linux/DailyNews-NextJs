import React, { Fragment } from "react";
import { useApolloClient } from "@apollo/client";
import {
  ButtonsContainer,
  SeparatorContainer,
  SocialButton,
  IconContainer,
  SocialTextContainer,
  ButtonContainer
} from "./SignInStyled";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { authUser } from '../../services/userService';

import './SignInStyle.scss';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const SignInComponent = () => {
  const client = useApolloClient();

  const onFinish = async ({email,password}) => {
    let user = await authUser(client,email,password);
    console.log(user);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <ButtonsContainer>
        <SocialButton backgroundColor="#3b5998" >
          <IconContainer>
            <i className="fab fa-facebook-f"></i>
          </IconContainer>
          <SocialTextContainer href="http://localhost:4000/daily-news/auth/facebook">Sign In Facebook</SocialTextContainer>
        </SocialButton>

        <SocialButton backgroundColor="#db4a39">
          <IconContainer>
            <i className="fab fa-google-plus-g"></i>
          </IconContainer>
          <SocialTextContainer href="http://localhost:4000/daily-news/auth/google">Sign In Google</SocialTextContainer>
        </SocialButton>
      </ButtonsContainer>
      <SeparatorContainer>or</SeparatorContainer>

      <Form
        {...layout}
        name="formSignIn"
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <ButtonContainer>
          <Button className="buttonSignIn" type="primary" htmlType="submit">
            Sign In
          </Button>
        </ButtonContainer>
      </Form>
    </Fragment>
  );
};

export default SignInComponent;
