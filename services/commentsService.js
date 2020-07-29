import { QUERY_GET_PARENT_TREE_QUESTIONS,QUERY_TOTAL_FIRST_CHILDREN } from "../graphql/schemas/CommentSchema";

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
