import { gql } from "@apollo/client";

export const QUERY_GET_NEWS = gql`
  query getNews($input: NewPaginationInput) {
    getNews(input: $input) {
      title
      description
      urlImage
      url
    }
  }
`;
