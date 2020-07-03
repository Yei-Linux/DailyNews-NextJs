import React, { useEffect, useState, Fragment } from "react";
import { List, Pagination } from "antd";
import { useLazyQuery } from "@apollo/client";

import NewsRow from "../NewsRow/NewsRow";
import { QUERY_GET_NEWS } from "../../graphql/schemas/NewsSchemas";
import { QUERY_GET_TOTAL_ROWS_OF_DOCUMENT } from "../../graphql/schemas/DynamicSchema";

const NewsTable = () => {
  const PAGE_SIZE = 5;
  const MODEL = "New";

  const [pageState,setPageState] = useState(1);
  const [
    getTotalRowsState,
    { data: dataRows, loading: loadingRows, error: errorRows }
  ] = useLazyQuery(QUERY_GET_TOTAL_ROWS_OF_DOCUMENT);
  const [getNews, { data, loading, error }] = useLazyQuery(QUERY_GET_NEWS);

  useEffect(() => {
    handleGetTotalRows(MODEL);
    handleGetNews(1, PAGE_SIZE);
  }, []);

  const handlePagination = page => {
    handleGetNews(page, PAGE_SIZE);
    loading && setPageState(page);
  };

  const handleGetNews = (page, limit) => {
    getNews({ variables: { input: { page, limit } } });
  };

  const handleGetTotalRows = model => {
    getTotalRowsState({ variables: { input: { model } } });
  };

  return (
    <Fragment>
      {data && (
        <Fragment>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={data["getNews"]}
            renderItem={newItem => <NewsRow newItem={newItem} />}
          />
          <Pagination
            defaultCurrent={pageState}
            defaultPageSize={PAGE_SIZE}
            onChange={handlePagination}
            total={dataRows["getTotalRows"]["size"]}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default NewsTable;
