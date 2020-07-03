import { gql } from "@apollo/client";

export const QUERY_GET_TOTAL_ROWS_OF_DOCUMENT = gql`
  query getTotalRows($input: DynamicInput) {
    getTotalRows(input: $input) {
      size
    }
  }
`;
