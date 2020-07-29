import "antd/dist/antd.css";
import "../styles/styles.global.scss";

import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo";
import CommentState from "../context/comments/commentState";

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CommentState>
        <Component {...pageProps} />
      </CommentState>
    </ApolloProvider>
  );
}
