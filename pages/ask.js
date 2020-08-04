import React, { useContext } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ListTable from "../components/shared/ListTable/ListTable";

import { QUERY_GET_QUESTIONS } from "../graphql/schemas/CommentSchema";
import { QUERY_GET_TOTAL_ROWS_OF_DOCUMENT } from "../graphql/schemas/DynamicSchema";

import CustomBackGround from "../components/shared/CustomBackground/CustomBackGround";
import contextAuthentication from "../context/authentication/authenticationContext";

const Ask = () => {
  const { isLogging, setLogging } = useContext(contextAuthentication);

  return (
    <MainLayout
      customStyles={
        !isLogging
          ? {
              padding: "0 50px",
              height: "100%",
              width: "100%",
              top: 0,
              position: "absolute",
              left: 0
            }
          : {
              padding: "0 50px",
              height: "100%"
            }
      }
    >
      <div className="listContainer">
        {isLogging ? (
          <ListTable
            pageSize={5}
            model={"Comment"}
            queryTotalRows={QUERY_GET_TOTAL_ROWS_OF_DOCUMENT}
            queryGetRows={QUERY_GET_QUESTIONS}
            nameQuery={"getQuestions"}
            itemType={"comment"}
            title={"Comments"} hasButton={true} buttonTitle={"Add Question"}
          />
        ) : (
          <CustomBackGround />
        )}
      </div>
    </MainLayout>
  );
};

export default Ask;
