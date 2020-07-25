import React, { Fragment } from "react";
import { Form, Button, Input  } from "antd";

const { TextArea } = Input;

const InputComment = () => {
  return (
    <Fragment>
      <Form.Item>
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </Fragment>
  );
};

export default InputComment;
