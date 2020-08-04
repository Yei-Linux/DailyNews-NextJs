import React, { useReducer,useEffect } from "react";
import contextAuthentication from "./authenticationContext";
import authenticationReducer from "./authenticationReducer";
import { SET_IS_LOGGING } from "../types";

import Cookie from "js-cookie";

function AuthenticationState(props) {
  const initialState = {
    isLogging: false
  };

  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  useEffect(() => {
    setLogging(hasJWTCookies());
  }, []);

  const hasJWTCookies = () => {
    if (Cookie.get("jwt") != undefined || Cookie.get("jwt") != null) {
      return true;
    }
    return false;
  };

  const setLogging = data => {
    dispatch({
        type: SET_IS_LOGGING,
        payload: data
    });
  }

  return (
    <contextAuthentication.Provider
      value={{
        isLogging: state.isLogging,
        setLogging
      }}
    >
      {props.children}
    </contextAuthentication.Provider>
  );
}

export default AuthenticationState;
