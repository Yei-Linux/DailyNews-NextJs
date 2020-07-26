import React, { useEffect, useState } from "react";
import MainLayout from "../../../components/layouts/MainLayout";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import * as lodashLib from "lodash";

import QuestionThread from "../../../components/questionThreadComponent/QuestionThreadComponent";
import RelatedQuestions from "../../../components/relatedQuestionComponent/RelatedQuestionComponent";

import {
  findParentCommentAndDelete,
  buildingTreeCommentsOfParent,
  getParentItem
} from "../../../helpers/ManagmentDataHelper";

import { QUERY_GET_PARENT_TREE_QUESTIONS } from "../../../graphql/schemas/CommentSchema";

const QuestionThreadPage = () => {
  const {
    query: { questionId }
  } = useRouter();

  const [getTreeOfCommentsByParent, { data, loading, error }] = useLazyQuery(
    QUERY_GET_PARENT_TREE_QUESTIONS
  );
  const [parentState, setParentState] = useState(null);
  const [treeCommentsState, setTreeCommentsState] = useState([]);

  useEffect(() => {
    hanbleGetTreeOfCommentsByParent();
  }, []);

  useEffect(() => {
    if (data != undefined) {
      let extensibleArray = lodashLib.cloneDeep(
        data.getTreeCommentsByQuestionId
      );
      let parentElement = getParentItem(extensibleArray, questionId);
      let dataFilteredWithoutParent = findParentCommentAndDelete(
        extensibleArray,
        questionId
      );
      let treeBuilt = buildingTreeCommentsOfParent(
        dataFilteredWithoutParent,
        questionId
      );
      setParentState(parentElement);
      setTreeCommentsState(treeBuilt);
      console.log(parentElement);
      console.log(treeBuilt);
    }
  }, [loading]);

  const hanbleGetTreeOfCommentsByParent = () => {
    getTreeOfCommentsByParent({ variables: { input: { questionId } } });
  };

  return (
    <MainLayout>
      <div className="questionThreadPageContainer">
        {parentState && treeCommentsState.length > 0 && (
          <div className="questionThread">
            <QuestionThread
              parentElement={parentState}
              treeBuilt={treeCommentsState}
            />
          </div>
        )}

        <div className="relatedQuestion">
          <RelatedQuestions />
        </div>
      </div>
    </MainLayout>
  );
};

export default QuestionThreadPage;
