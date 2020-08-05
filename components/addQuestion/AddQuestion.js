import React, { useState, Fragment, useContext } from "react";
import { Form, Input, Button, Select, Tag } from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ButtonContainer } from "./AddQuestionStyled";
import { getColorOrValue, getFieldOfUserInfo } from "../../helpers/ManagmentDataHelper";

import contextTag from "../../context/tag/tagContext";
import CustomTagRender from "../shared/CustomTagRender/CustomTagRender";

import { insertQuestion, insertQuestionTags } from "../../services/commentsService";
import { useApolloClient } from "@apollo/client";

const AddQuestion = ({ toggleModal }) => {
  const client = useApolloClient();
  const { tags } = useContext(contextTag);
  const [isLoading, setLoading] = useState(false);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };

  const handleAddQuestion = async ({ question, description, tags }) => {
    let response = await insertQuestion(client,question,description,getFieldOfUserInfo('id'));
    let responseQuestionTags = await insertQuestionTags(client,response['insertComment']['_id'],handlePrepareTagsData(tags));
  };

  const handlePrepareTagsData = tags => {
    return tags.map(tag => {
      return {_id : ObjectID(getColorOrValue(tag, 1))};
    } );  
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
            tagRender={CustomTagRender}
            style={{ width: "100%" }}
            placeholder="Select programming languages"
            options={tags}
          />
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
