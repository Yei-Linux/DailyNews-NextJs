export const getTags = async (client, queryGetTags) => {
  const { data } = await client.query({
    query: queryGetTags
  });
  return data;
};
