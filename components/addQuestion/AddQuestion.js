import React, { useState, Fragment } from "react";
import { Form, Input, Button, Select } from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  ButtonContainer
} from "./SignInStyled";

const { Option } = Select;

const AddQuestion = ({ toggleModal }) => {
  const [isLoading, setLoading] = useState(false);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  const [children, setChildren] = useState([
    { label: "Python", value: "1" },
    { label: "Java", value: "2" }
  ]);

  const handleAddQuestion = async ({ question, description, tags }) => {
    /*setLoading(true);

    let { data, newErrors } = await authUser(client, email, password);
    if (newErrors) {
      setLoading(false);
      setInputError(newErrors);
      return;
    }

    setLoading(false);
    toggleModal();
    */
  };

  const handleChange = event => {
    console.og(event);
  };

  return (
    <Fragment>
      <Form
        {...layout}
        name="formAddQuestion"
        initialValues={{}}
        onFinish={handleAddQuestion}
      >
        <Form.Item
          name="question"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Question"
          />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Description"
          />
        </Form.Item>

        <Form.Item name="tags">
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select programming languages"
            defaultValue={[
              { label: "Python", value: "1" },
              { label: "Java", value: "2" }
            ]}
            onChange={handleChange}
          >
            {children}
          </Select>
        </Form.Item>

        <ButtonContainer>
          <Button
            loading={isLoading}
            className="buttonAddQuestion"
            type="primary"
            htmlType="submit"
          >
            Add question
          </Button>
        </ButtonContainer>
      </Form>
    </Fragment>
  );
};

export default AddQuestion;
