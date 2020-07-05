import { gql } from "@apollo/client";

export const QUERY_GET_JOBS = gql`
  query getJobs($input: JobPaginationInput) {
    getJobs(input: $input) {
      title
      description
      urlImage
      url
    }
  }
`;
