import React from "react";
import { StyleSheet, View } from "react-native";
import { AppScreenTemplate } from "../../components/AppScreenTemplate";
import { AuthNavigationProps } from "../../navigation/AuthNavigator";
import { LoginForm } from "../../components/forms/LoginForm";

interface LoginScreenProps extends AuthNavigationProps<"LoginScreen"> {}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <AppScreenTemplate
      title="LOGIN"
      navIcon={true}
      navIconPress={() => navigation.goBack()}
    >
      {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
      <View style={styles.container}>
        <LoginForm />
      </View>
    </AppScreenTemplate>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginTop: 20,
  },
  // logo: {
  //   width: 70,
  //   height: 70,
  //   alignSelf: "center",
  //   marginTop: 50,
  //   marginBottom: 20,
  // },
});
