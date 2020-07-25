import { gql } from "@apollo/client";

export const QUERY_GET_QUESTIONS = gql`
  query getQuestions($input: CommentPaginationInput) {
    getQuestions(input: $input) {
      _id
      comment
      description
      user {
        email
        userName
      }
      numberComments
      createdAt
      parent
    }
  }
`;

export const QUERY_GET_PARENT_TREE_QUESTIONS = gql`
  query getTreeCommentsByQuestionId($input: SearchInput) {
    getTreeCommentsByQuestionId(input: $input) {
      _id
      comment
      description
      user {
        email
        userName
      }
      createdAt
      parent
      numberComments
    }
  }
`;
