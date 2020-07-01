import React from "react";
import { List } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

import { IconText } from '../../factories/IconFactory'; 

const NewsRow = ({ newItem }) => {

  return (
    <List.Item
      key={newItem.title}
      actions={[
        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
      ]}
      extra={
        <img
          width={272}
          height={185}
          alt="logo"
          src={newItem.urlImage}
        />
      }
    >
      <List.Item.Meta
        title={<a href={newItem.url}>{newItem.title}</a>}
        description={newItem.description}
      />
    </List.Item>
  );
};

export default NewsRow;
