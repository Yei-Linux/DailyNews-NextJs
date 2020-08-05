import "antd/dist/antd.css";
import "../styles/styles.global.scss";

import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo";
import CommentState from "../context/comments/commentState";
import SpinnerState from "../context/spinner/spinnerState";
import AuthenticationState from "../context/authentication/authenticationState";
import TagState from "../context/tag/tagState";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <AuthenticationState>
        <TagState>
          <SpinnerState>
            <CommentState>
              <Component {...pageProps} />
            </CommentState>
          </SpinnerState>
        </TagState>
      </AuthenticationState>
    </ApolloProvider>
  );
};

export default MyApp;
