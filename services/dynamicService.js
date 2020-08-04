export const getRows = async (client, queryGetRows, page, limit) => {
  const { data } = await client.query({
    query: queryGetRows,
    variables: { input: { page, limit } }
  });
  return data;
};

export const getTotalRows = async (client, queryTotalRows, model) => {
  const { data } = await client.query({
    query: queryTotalRows,
    variables: { input: { model } }
  });
  return data;
};
