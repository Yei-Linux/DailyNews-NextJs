import React, { useReducer, useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import contextTag from "./tagContext";
import tagReducer from "./tagReducer";
import { SET_TAGS } from "../types";

import { parseTagArray } from "../../helpers/ManagmentDataHelper";
import { getTags } from "../../services/tagService";
import { QUERY_GET_TAGS } from "../../graphql/schemas/TagSchema";

const initialState = {
  tags: []
};

function TagState(props) {
  const client = useApolloClient();
  const [state, dispatch] = useReducer(tagReducer, initialState);

  useEffect(() => {
    handleGetTags();
  }, []);

  const handleGetTags = async () => {
    let data = await getTags(client, QUERY_GET_TAGS);
    setTags(parseTagArray(data['getTags']));
  };

  const setTags = data => {
    dispatch({
      type: SET_TAGS,
      payload: data
    });
  };

  return (
    <contextTag.Provider
      value={{
        tags: state.tags,
        setTags
      }}
    >
      {props.children}
    </contextTag.Provider>
  );
}

export default TagState;
