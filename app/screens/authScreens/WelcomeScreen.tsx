import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { appStyles } from "../../config/appStyles";
import { CustomText } from "../../components/basicComponents/CustomText";
import { CustomButton } from "../../components/basicComponents/CustomButton";
import {
  AuthNavigationProps,
  AuthNavigatorParamList,
} from "../../navigation/AuthNavigator";
import { routes } from "../../navigation/routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";

export interface WelcomeScreenProps<T extends keyof AuthNavigatorParamList> {
  navigation: StackNavigationProp<AuthNavigatorParamList, T>;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps<"WelcomeScreen">> = ({
  navigation,
}) => {
  return (
    <ImageBackground
      source={require("../../assets/runway.jpg")}
      style={styles.background}
      blurRadius={1}
    >
      <View style={styles.main}>
        <View style={styles.titleBox}>
          {/* <CustomText style={styles.title}>CHECKMAKE</CustomText> */}
          <View style={styles.subTitleBox}>
            <CustomText style={styles.subTitle}>CHECKMAKE</CustomText>
            <MaterialCommunityIcons
              style={styles.icon}
              name="check-box-outline"
              size={60}
              color={appStyles.colors.lightgreen}
            />
          </View>
        </View>

        <View style={styles.buttons}>
          <CustomButton
            containerStyles={styles.authButton}
            text="Login"
            onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
          />
          <CustomButton
            containerStyles={styles.authButton}
            text="Register"
            onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  main: {
    flex: 1,
    position: "relative",
  },
  titleBox: {
    width: "100%",
    height: 200,
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  subTitleBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: appStyles.colors.white,
    fontSize: 80,
    fontWeight: "bold",
    letterSpacing: 25,
  },
  subTitle: {
    color: appStyles.colors.white,
    fontSize: 50,
    letterSpacing: 5,
  },
  icon: {
    marginLeft: 5,
  },
  buttons: {
    paddingBottom: 70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  authButton: {
    width: "45%",
  },
});
