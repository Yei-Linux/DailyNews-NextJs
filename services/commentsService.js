import { QUERY_GET_QUESTIONS,QUERY_GET_PARENT_TREE_QUESTIONS,QUERY_TOTAL_FIRST_CHILDREN,MUTATION_INSERT_QUESTION_TAGS, MUTATION_INSERT_QUESTION } from "../graphql/schemas/CommentSchema";
import { QUERY_GET_TOTAL_ROWS_OF_DOCUMENT } from "../graphql/schemas/DynamicSchema";

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

export const insertQuestion = async (client,comment,description,user,parent=undefined) => {
  const { data } = await client.mutate({
    mutation: MUTATION_INSERT_QUESTION,
    variables: { input: { comment,description,user,parent} }
  });
  return data;
}

export const insertQuestionTags = async (client,comment, tags) => {
  const { data } = await client.mutate({
    mutation: MUTATION_INSERT_QUESTION_TAGS,
    variables: { input: { comment,tags} },
    refetchQueries : [{query: QUERY_GET_TOTAL_ROWS_OF_DOCUMENT,variables: { input: { model: "Comment" } } },
                        {query: QUERY_GET_QUESTIONS,variables: {input:{limit:5,page:1}}}]
  });
  return data;
}
