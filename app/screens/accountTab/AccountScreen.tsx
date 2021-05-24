import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useAuth } from "../../providers/AuthProvider";
import { AppScreenTemplate } from "../../components/AppScreenTemplate";
import { CustomText } from "../../components/basicComponents/CustomText";
import { CustomButton } from "../../components/basicComponents/CustomButton";

// import { CustomTextInput } from "../../../components/forms/formComponents/CustomTextInput";
// import { DataContext } from "../../../providers/DataProvider";
// import produce from "immer";
// import { ErrorMessage } from "../../../components/forms/formComponents/ErrorMessage";
// import produce from "immer";
// import { DataContext } from "../../../providers/DataProvider";
// import { AppStateContext } from "../../../providers/AppStateProvider";
// import { appStyles } from "../../../config/appStyles";
// import { CustomCheckbox } from "../../../components/basicComponents/CustomCheckbox";
// import { CustomCheckbox } from "../components/CustomCheckbox";
import { AppStateContext } from "../../providers/AppStateProvider";
import { appStyles } from "../../config/appStyles";
import { CustomCheckbox } from "../../components/basicComponents/CustomCheckbox";

interface AccountScreenProps {}

export const AccountScreen: React.FC<AccountScreenProps> = ({ children }) => {
  const { user, signout } = useAuth();
  // const { checklistFolders, memoryItems, noteFolders } = useContext(
  //   DataContext
  // );
  // const { uid } = useContext(AuthContext);
  const { theme, setTheme } = useContext(AppStateContext);

  const setThemeValue = () => {
    if (theme.type === "light") {
      setTheme(appStyles.darkTheme);
    } else {
      setTheme(appStyles.lightTheme);
    }
  };

  const handleLogout = async () => {
    signout!();
  };

  return (
    <AppScreenTemplate title="My Account">
      <View style={styles.main}>
        <CustomText>Logged in as: {user?.me!.email}</CustomText>
        <View style={styles.themeCheckbox}>
          <CustomCheckbox
            text={theme ? "Dark theme?" : "Light"}
            check={theme.type === "dark"}
            setCheck={setThemeValue}
          />
        </View>
      </View>
      <CustomButton text="Logout" onPress={() => signout!()} />
    </AppScreenTemplate>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 15,
    width: "100%",
    flex: 1,
  },
  themeCheckbox: {
    width: "40%",
    marginTop: 20,
    marginBottom: 20,
  },
});
