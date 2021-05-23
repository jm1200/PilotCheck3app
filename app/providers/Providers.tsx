import { ApolloProvider } from "./ApolloProvider";
import React from "react";
import { AuthProvider } from "./AuthProvider";
import { AppEntry } from "../screens/AppEntry";

export const Providers: React.FC = () => {
  return (
    <>
      <ApolloProvider>
        <AuthProvider>
          <AppEntry />
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};
