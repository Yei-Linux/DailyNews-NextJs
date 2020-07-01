import React, { useEffect, Fragment } from "react";
import { List } from "antd";
import { useQuery } from "@apollo/client";

import NewsRow from "../NewsRow/NewsRow";
import { QUERY_GET_NEWS } from "../../graphql/schemas/NewsSchemas";

const NewsTable = () => {
  const { data, loading, error } = useQuery(QUERY_GET_NEWS);

  const handlePagination = page => {
    console.log(page);
  };

  return (
    <Fragment>
      {data && (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: handlePagination,
            pageSize: 3
          }}
          dataSource={data["getNews"]}
          renderItem={newItem => <NewsRow newItem={newItem} />}
        />
      )}
    </Fragment>
  );
};

export default NewsTable;
