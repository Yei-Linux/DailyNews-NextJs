import {
  MUTATION_INSERT_USER,
  MUTATION_AUTH_USER
} from "../graphql/schemas/UserSchema";

import { getErrors } from "../helpers/ErrorHelper";

export const insertUser = async (client, email, userName, password) => {
  const { data } = await client.mutate({
    mutation: MUTATION_INSERT_USER,
    variables: { input: { email, userName, password } }
  });
  return data;
};

export const authUser = async (client, email, password) => {
  const { data , errors } = await client.mutate({
    mutation: MUTATION_AUTH_USER,
    variables: { input: { email, password } },
    errorPolicy: 'all'
  });

  let newErrors = getErrors(errors);
  return { data , newErrors };
};
