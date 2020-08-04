import React, { Fragment, useState, useEffect , useContext} from "react";
import { useApolloClient } from "@apollo/client";
import { useRouter } from 'next/router'

import {
  ButtonsContainer,
  SeparatorContainer,
  SocialButton,
  IconContainer,
  SocialTextContainer,
  ButtonContainer
} from "./SignInStyled";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import contextAuthentication from '../../context/authentication/authenticationContext';

import Cookie from "js-cookie";
import { authUser } from "../../services/userService";

import "./SignInStyle.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const SignInComponent = ({ toggleModal }) => {
  const router = useRouter();
  const client = useApolloClient();
  const [isLoading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(null);
  const { setLogging } = useContext(contextAuthentication);

  const onFinish = async ({ email, password }) => {
    setLoading(true);

    let { data, newErrors } = await authUser(client, email, password);
    if (newErrors) {
      setLoading(false);
      setInputError(newErrors);
      return;
    }

    let {
      authUser: { email: emailValue, id, token, userName: displayName }
    } = data;
    setLoading(false);
    toggleModal();
    openNotification("Login successfull", `Welcome ${displayName}`, "topRight");
    Cookie.set("jwt", token);
    Cookie.set(
      "user_info",
      JSON.stringify({ id, emailValue, displayName, avatarValue: "" })
    );
    setLogging(true);
    router.push("/");
  };

  const openNotification = (message, description, placement) => {
    notification.success({
      message,
      description,
      placement
    });
  };

  return (
    <Fragment>
      <ButtonsContainer>
        <SocialButton backgroundColor="#3b5998">
          <IconContainer>
            <i className="fab fa-facebook-f"></i>
          </IconContainer>
          <SocialTextContainer href="http://localhost:4000/daily-news/auth/facebook">
            Sign In Facebook
          </SocialTextContainer>
        </SocialButton>

        <SocialButton backgroundColor="#db4a39">
          <IconContainer>
            <i className="fab fa-google-plus-g"></i>
          </IconContainer>
          <SocialTextContainer href="http://localhost:4000/daily-news/auth/google">
            Sign In Google
          </SocialTextContainer>
        </SocialButton>
      </ButtonsContainer>

      <SeparatorContainer>or</SeparatorContainer>

      <Form
        {...layout}
        name="formSignIn"
        initialValues={{}}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <ButtonContainer>
          <Button
            loading={isLoading}
            className="buttonSignIn"
            type="primary"
            htmlType="submit"
          >
            Sign In
          </Button>
        </ButtonContainer>
      </Form>
    </Fragment>
  );
};

export default SignInComponent;
