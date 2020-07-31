import { gql } from "@apollo/client";

export const MUTATION_INSERT_USER = gql`
  mutation insertUser($input: UserInput) {
    insertUser(input: $input) {
      email
      userName
    }
  }
`;

export const MUTATION_AUTH_USER = gql`
  mutation authUser($input: UserInput) {
    authUser(input: $input) {
      id
      email
      userName
      token
    }
  }
`;
