import React from "react";

import { List } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

import { IconText } from "../shared/IconText/IconText";

const CardComponent = ({ item }) => {
  return (
    <List.Item
      key={item.title}
      actions={[
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
      ]}
      extra={<img width={272} height={185} alt="logo" src={item.urlImage} />}
    >
      <List.Item.Meta
        title={
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            {item.title}
          </a>
        }
        description={item.description}
      />
    </List.Item>
  );
};

export default CardComponent;
