import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { routes } from "./routes";
import { RouteProp } from "@react-navigation/native";
import { WelcomeScreen } from "../screens/authScreens/WelcomeScreen";
import { LoginScreen } from "../screens/authScreens/LoginScreen";
import { RegisterScreen } from "../screens/authScreens/RegisterScreen";

interface AuthNavigatorProps {}

export type AuthNavigatorParamList = {
  [routes.WELCOME_SCREEN]: undefined;
  [routes.LOGIN_SCREEN]: undefined;
  [routes.REGISTER_SCREEN]: undefined;
};

export interface AuthNavigationProps<T extends keyof AuthNavigatorParamList> {
  navigation: StackNavigationProp<AuthNavigatorParamList, T>;
  route: RouteProp<AuthNavigatorParamList, T>;
}

const Stack = createStackNavigator<AuthNavigatorParamList>();

export const AuthNavigator: React.FC<AuthNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.WELCOME_SCREEN}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.LOGIN_SCREEN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.REGISTER_SCREEN}
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
