import { QUERY_GET_PARENT_TREE_QUESTIONS,QUERY_TOTAL_FIRST_CHILDREN,MUTATION_INSERT_QUESTION_TAGS, MUTATION_INSERT_QUESTION } from "../graphql/schemas/CommentSchema";

export const getTreeOfCommentsByParent = async (client,questionId,skip) => {
  const { data } = await client.query({
    query: QUERY_GET_PARENT_TREE_QUESTIONS,
    variables: { input: { questionId, skip, limit: 1 } }
  });
  return data;
};

export const getTotalFirstLevelChildren = async (client,questionId) => {
  const { data } = await client.query({
    query: QUERY_TOTAL_FIRST_CHILDREN,
    variables: { input: { questionId } }
  });
  return data;
}

export const insertQuestion = async (client,comment,description,user) => {
  const { data } = await client.mutate({
    mutation: MUTATION_INSERT_QUESTION,
    variables: { input: { comment,description,user,parent: undefined} }
  });
  return data;
}

export const insertQuestionTags = async (client,comment, tags) => {
  console.log(comment);
  const { data } = await client.mutate({
    mutation: MUTATION_INSERT_QUESTION_TAGS,
    variables: { input: { comment,tags} }
  });
  return data;
}
