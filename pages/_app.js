import "antd/dist/antd.css";
import "../styles/styles.global.scss";

import { ApolloProvider } from "@apollo/client";
import client from '../config/apollo';

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
