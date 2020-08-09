import React, { useEffect } from "react";
import MainLayout from "../../../components/layouts/MainLayout";
import { useRouter } from "next/router";

import QuestionThread from "../../../components/questionThreadComponent/QuestionThreadComponent";
import RelatedQuestions from "../../../components/relatedQuestionComponent/RelatedQuestionComponent";

import useNestedComments from '../../../hooks/useNestedComments';
import usePrevious from '../../../hooks/usePrevious';

const QuestionThreadPage = () => {
  const {
    query: { questionId }
  } = useRouter();

  const { parentState,treeCommentsState,questionIdState,handleGetAndBuildingComments,updateQuestionId } = useNestedComments(questionId);
  const prevQuestionIdState = usePrevious(questionIdState);

  useEffect(() => {
    validateQuestionIdDefinedAndPrevCurrentNotEquals() && updateQuestionId(questionId);
  }, [questionId]);

  useEffect(()=>{
    validateQuestionIdIsRenderOrPrevCurrentNotEquals() && fetchComments();
  },[questionIdState]);

  const validateQuestionIdDefinedAndPrevCurrentNotEquals = () =>{
    return questionId != undefined && questionId != questionIdState
  }

  const validateQuestionIdIsRenderOrPrevCurrentNotEquals = () =>{
    return prevQuestionIdState == '' || (questionIdState != ''  && questionId != questionIdState); 
  }

  const fetchComments = async () => {
    await handleGetAndBuildingComments();
  }

  return (
    <MainLayout customStyles={{
      padding: "0 50px",
      height: "100%"
    }}>
      <div className="questionThreadPageContainer">
        {parentState && (
          <div className="questionThread">
            <QuestionThread/>
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
