import React, { useEffect } from "react";
import MainLayout from "../../../components/layouts/MainLayout";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import * as lodashLib from 'lodash';

import QuestionThread from "../../../components/questionThreadComponent/QuestionThreadComponent";
import RelatedQuestions from "../../../components/relatedQuestionComponent/RelatedQuestionComponent";

import {
  findParentCommentAndDelete,
  buildingTreeCommentsOfParent,
  addingFieldForArray
} from "../../../helpers/ManagmentDataHelper";

import { QUERY_GET_PARENT_TREE_QUESTIONS } from "../../../graphql/schemas/CommentSchema";

const QuestionThreadPage = () => {
  const {
    query: { questionId }
  } = useRouter();

  const [getTreeOfCommentsByParent, { data, loading, error }] = useLazyQuery(
    QUERY_GET_PARENT_TREE_QUESTIONS
  );

  useEffect(() => {
    hanbleGetTreeOfCommentsByParent();
  }, []);

  useEffect(() => {
    if (data != undefined) {
      let extensibleArray = lodashLib.cloneDeep(data.getTreeCommentsByQuestionId);
      let dataFilteredWithoutParent = findParentCommentAndDelete(
        extensibleArray,
        questionId
      );
      let treeBuilt = buildingTreeCommentsOfParent(
        dataFilteredWithoutParent,
        questionId
      );
    }
  }, [loading]);

  const hanbleGetTreeOfCommentsByParent = () => {
    getTreeOfCommentsByParent({ variables: { input: { questionId } } });
  };

  return (
    <MainLayout>
      <div className="questionThreadPageContainer">
        <div className="questionThread">
          <QuestionThread />
        </div>
        <div className="relatedQuestion">
          <RelatedQuestions />
        </div>
      </div>
    </MainLayout>
  );
};

export default QuestionThreadPage;
