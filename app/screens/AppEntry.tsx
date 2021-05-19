import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { customNavigationTheme } from "../config/appStyles";
import { navigationRef } from "../navigation/rootNavigation";
import { AuthNavigator } from "../navigation/AuthNavigator";
import { Text, View } from "react-native";
import { CustomButton } from "../components/basicComponents/CustomButton";
import { MeDocument, MeQuery, useLogoutMutation } from "../generated/graphql";
import * as SecureStore from "expo-secure-store";

interface AppEntryProps {}

export const AppEntry: React.FC<AppEntryProps> = ({}) => {
  const { user } = useAuth();
  console.log("AppEntry.tsx 15 user:", user);

  return (
    <NavigationContainer ref={navigationRef} theme={customNavigationTheme}>
      {user?.me ? <ProtectedAuth /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const ProtectedAuth = () => {
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    await logout({
      update: (cache) => {
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            __typename: "Query",
            me: null,
          },
        });
      },
    });
  };
  return (
    <View>
      <Text>Logged in successfully@</Text>
      <CustomButton text="Logout" onPress={handleLogout} />
    </View>
  );
};
