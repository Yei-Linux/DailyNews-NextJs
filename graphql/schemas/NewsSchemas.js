import { gql } from "@apollo/client";

export const QUERY_GET_NEWS = gql`
  query {
    getNews {
      title
      description
      urlImage
      url
    }
  }
`;
