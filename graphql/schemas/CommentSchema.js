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
      tags {
        name
        color
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
      tags {
        name
        color
      }
      createdAt
      parent
      numberComments
    }
  }
`;

export const QUERY_TOTAL_FIRST_CHILDREN = gql`
  query getFirstLevelChildrenByParentId($input: SearchInput) {
    getFirstLevelChildrenByParentId(input: $input) {
      total
    }
  }
`;
