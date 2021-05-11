import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useGetUsersQuery } from "./app/generated/graphql";
import { Providers } from "./app/providers/Providers";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>test second edit</Text>
        <StatusBar style="auto" />
        <Test />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Test = () => {
  const { data } = useGetUsersQuery();
  console.log("App.tsx 15 data:", data);
  return (
    // <View>
    //   <Text>This is a test.</Text>
    // </View>
    <Providers />
  );
};
