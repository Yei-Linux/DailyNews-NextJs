import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ListTable from "../components/shared/ListTable/ListTable";

import { QUERY_GET_QUESTIONS } from "../graphql/schemas/CommentSchema";
import { QUERY_GET_TOTAL_ROWS_OF_DOCUMENT } from "../graphql/schemas/DynamicSchema";

const Ask = () => {
  return (
    <MainLayout>
      <div className="listContainer">
        <ListTable
          pageSize={5}
          model={"Comment"}
          queryTotalRows={QUERY_GET_TOTAL_ROWS_OF_DOCUMENT}
          queryGetRows={QUERY_GET_QUESTIONS}
          nameQuery={"getQuestions"}
          itemType={"comment"}
        />
      </div>
    </MainLayout>
  );
};

export default Ask;
