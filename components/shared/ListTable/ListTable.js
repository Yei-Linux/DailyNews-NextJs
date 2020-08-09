import React, { useEffect, useState, useContext, Fragment } from "react";
import { List, Pagination } from "antd";
import { useApolloClient } from "@apollo/client";

import CustomHeaderTitle from "../../../components/shared/CustomHeaderTitle/CustomHeaderTitle";
import ListRow from "../ListRow/ListRow";
import contextSpinner from "../../../context/spinner/spinnerContext";
import { getRows, getTotalRows } from "../../../services/dynamicService";

const ListTable = ({
  pageSize,
  model,
  queryTotalRows,
  queryGetRows,
  nameQuery,
  itemType,
  title,
  hasButton,
  buttonTitle
}) => {
  const [pageState, setPageState] = useState(1);
  const [rows, setRows] = useState(null);
  const [totalRows, setTotalRows] = useState(null);
  const { setLoading } = useContext(contextSpinner);
  const client = useApolloClient();

  useEffect(() => {
    handleLoadingData();
  }, []);

  const handlePagination = async page => {
    setLoading(true);
    setTimeout(async () => {
      await handleGetRows(page, pageSize);
      setPageState(page);
      setLoading(false);
    }, 1000);
  };

  const handleGetRows = async (page, limit) => {
    const data = await getRows(client, queryGetRows, page, limit);
    setRows(data);
  };

  const handleGetTotalRows = async model => {
    const data = await getTotalRows(client, queryTotalRows, model);
    setTotalRows(data);
  }; 

  const handleLoadingData = async () => {
    setLoading(true);
    setTimeout(async () => {
      await handleGetTotalRows(model);
      await handleGetRows(1, pageSize);
      setLoading(false);
    }, 1000);
  }

  return (
    <Fragment>
      <CustomHeaderTitle title={title} hasButton={hasButton} buttonTitle={buttonTitle}/>
      {totalRows && rows && rows[nameQuery] && (
        <Fragment>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={rows[nameQuery]}
            renderItem={item => <ListRow item={item} itemType={itemType} />}
          />
          <Pagination
            defaultCurrent={pageState}
            defaultPageSize={pageSize}
            onChange={handlePagination}
            total={totalRows["getTotalRows"]["size"]}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ListTable;
