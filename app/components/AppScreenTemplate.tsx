import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CustomText } from "./basicComponents/CustomText";
import { appStyles } from "../config/appStyles";
import { AppStateContext } from "../providers/AppStateProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface AppScreenTemplateProps {
  title: string;
  navIcon?: boolean;
  navIconPress?: () => void;
}

export const AppScreenTemplate: React.FC<AppScreenTemplateProps> = ({
  children,
  title,
  navIcon,
  navIconPress,
}) => {
  const { theme } = useContext(AppStateContext);

  return (
    <View style={[{ backgroundColor: theme.primary }, styles.container]}>
      <View style={styles.titleSection}>
        {navIcon && (
          <TouchableOpacity onPress={navIconPress} style={styles.icon}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={30}
              color={appStyles.colors.white}
            />
          </TouchableOpacity>
        )}
        <CustomText style={styles.title}>{title}</CustomText>
      </View>
      <View
        style={[
          { backgroundColor: theme.backgroundColor },
          styles.mainContainer,
        ]}
      >
        {children}
        {/* <View style={[styles.main]}></View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titleSection: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 70,
    marginTop: 30,
  },
  title: {
    color: appStyles.colors.white,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 5,
  },
  icon: {
    position: "absolute",
    left: 0,
    marginLeft: 10,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  // main: {
  //   flex: 1,
  //   width: "100%",
  // },
});
