import { ApolloProvider } from "./ApolloProvider";
import React from "react";
import { AuthProvider } from "./AuthProvider";
import { AppEntry } from "../screens/AppEntry";
import { AppStateProvider } from "./AppStateProvider";

export const Providers: React.FC = () => {
  return (
    <>
      <ApolloProvider>
        <AuthProvider>
          <AppStateProvider>
            <AppEntry />
          </AppStateProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};
