import { gql } from "@apollo/client";

export const QUERY_GET_TAGS = gql`
  query getTags {
    getTags {
      _id
      name
      color
    }
  }
`;
