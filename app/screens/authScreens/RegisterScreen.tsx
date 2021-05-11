import React from "react";
import { StyleSheet, View } from "react-native";
import { AppScreenTemplate } from "../../components/AppScreenTemplate";
import { AuthNavigationProps } from "../../navigation/AuthNavigator";
import { RegisterForm } from "../../components/forms/RegisterForm";

interface RegisterScreenProps extends AuthNavigationProps<"RegisterScreen"> {}
export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  navigation,
}) => {
  return (
    <AppScreenTemplate
      title="REGISTER"
      navIcon={true}
      navIconPress={() => navigation.goBack()}
    >
      {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
      <View style={styles.container}>
        <RegisterForm />
      </View>
    </AppScreenTemplate>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, width: "90%", marginTop: 20 },
  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
