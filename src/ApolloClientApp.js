import React, { Suspense } from "react";

import AuthProvider from "./context/auth";
import App from "./App";
import Loading from "./components/Loading";
import "./i18n";
import "semantic-ui-css/semantic.min.css";
// import reportWebVitals from './reportWebVitals';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext(() => {
  const token = localStorage.getItem("rhouse");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const ApolloClientApp = () => {
  console.log(authLink.concat(httpLink));
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Suspense>
    </ApolloProvider>
  );
};

export default ApolloClientApp;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
