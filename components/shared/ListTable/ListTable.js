import React, { useEffect, useState, Fragment } from "react";
import { List, Pagination } from "antd";
import { useLazyQuery } from "@apollo/client";

import ListRow from "../ListRow/ListRow";

const ListTable = ({ pageSize, model, queryTotalRows, queryGetRows, nameQuery, itemType }) => {
  const [pageState,setPageState] = useState(1);
  const [ 
    getTotalRowsState,
    { data: dataRows, loading: loadingRows, error: errorRows }
  ] = useLazyQuery(queryTotalRows);
  const [getRows, { data, loading, error }] = useLazyQuery(queryGetRows);

  useEffect(() => {
    handleGetTotalRows(model);
    handleGetRows(1, pageSize);
  }, []);

  const handlePagination = page => {
    handleGetRows(page, pageSize);
    setPageState(page);
  };

  const handleGetRows = (page, limit) => {
    getRows({ variables: { input: { page, limit } } });
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
            dataSource={data[nameQuery]}
            renderItem={item => <ListRow item={item} itemType={itemType}/>}
          />
          <Pagination
            defaultCurrent={pageState}
            defaultPageSize={pageSize}
            onChange={handlePagination}
            total={dataRows["getTotalRows"]["size"]}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ListTable;
