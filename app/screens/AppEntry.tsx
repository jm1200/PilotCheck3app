import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { customNavigationTheme } from "../config/appStyles";
import { navigationRef } from "../navigation/rootNavigation";
import { AuthNavigator } from "../navigation/AuthNavigator";
import { SafeAreaView, Text, View } from "react-native";
import { CustomButton } from "../components/basicComponents/CustomButton";
import { AppNavigator } from "../navigation/AppNavigator";

interface AppEntryProps {}

export const AppEntry: React.FC<AppEntryProps> = ({}) => {
  const { user } = useAuth();
  console.log("AppEntry.tsx 15 user:", user);

  return (
    <NavigationContainer ref={navigationRef} theme={customNavigationTheme}>
      {user?.me ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// const ProtectedAuth = () => {
//   const { signout } = useAuth();
//   const handleLogout = async () => {
//     signout!();
//   };
//   return (
//     <SafeAreaView>
//       <Text>Logged in successfully@</Text>
//       <CustomButton text="Logout" onPress={handleLogout} />
//     </SafeAreaView>
//   );
// };
