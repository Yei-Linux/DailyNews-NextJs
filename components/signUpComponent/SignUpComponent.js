import React, { Fragment } from "react";
import { useApolloClient } from "@apollo/client";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, FormOutlined } from "@ant-design/icons";

import { insertUser } from '../../services/userService';

import { ButtonContainer } from "./SignUpStyled";
import "./SignUpStyle.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const SignUpComponent = () => {
  const client = useApolloClient();

  const onFinish = async ({email,password,userName}) => {
    let data = await insertUser(client,email,userName,password);
    console.log(data);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <Form
        {...layout}
        name="formSignUp"
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="userName"
          rules={[{ required: true, message: "Please input your UserName!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<FormOutlined className="site-form-item-icon" />}
            placeholder="Email"
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
            Sign Up
          </Button>
        </ButtonContainer>
      </Form>
    </Fragment>
  );
};

export default SignUpComponent;
