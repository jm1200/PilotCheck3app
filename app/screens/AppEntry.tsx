import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { customNavigationTheme } from "../config/appStyles";
import { navigationRef } from "../navigation/rootNavigation";
import { AuthNavigator } from "../navigation/AuthNavigator";
// import { AppNavigator } from "../navigation/AppNavigator";
import { Text, View } from "react-native";

interface AppEntryProps {}

export const AppEntry: React.FC<AppEntryProps> = ({}) => {
  const user = useContext(AuthContext);
  const [Component, setComponent] = useState(<AuthNavigator />);
  console.log("AppEntry.tsx 15 user:", user);

  //const Component = <WelcomeScreen />;
  useEffect(() => {
    if (user.loggedIn) {
      setComponent(<ProtectedAuth />);
    } else {
      setComponent(<AuthNavigator />);
    }
  }, [user]);

  return (
    <NavigationContainer ref={navigationRef} theme={customNavigationTheme}>
      {Component}
      {/* {user.loggedIn ? <AppNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};

const ProtectedAuth = () => {
  return (
    <View>
      <Text>Logged in successfully@</Text>
    </View>
  );
};
