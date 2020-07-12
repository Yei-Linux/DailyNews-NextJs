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
