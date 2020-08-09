import React, { Fragment } from "react";
import { Form, Button, Input } from "antd";

const { TextArea } = Input;

const InputComment = ({ handleAddComment }) => {

  const onFinish = async ({ comment }) => {
    console.log(comment);
    await handleAddComment(comment);
  };

  return (
    <Fragment>
      <Form
        name="formSignIn"
        initialValues={{}}
        onFinish={onFinish}
      >
        <Form.Item
          name="comment"
          rules={[{ required: true, message: "Please input your comment" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Add Comment
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default InputComment;
