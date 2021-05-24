import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { appStyles } from "../../config/appStyles";
import { CustomText } from "./CustomText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CustomCheckboxProps {
  containerStyles?: any;
  textStyles?: any;
  text: string;
  check: boolean;
  setCheck: any;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  text,
  containerStyles,
  textStyles,
  check,
  setCheck,
}) => {
  const handlePress = () => {
    setCheck();
  };
  return (
    <TouchableOpacity
      style={[styles.container, containerStyles]}
      onPress={handlePress}
    >
      <View style={styles.view}>
        <CustomText style={[styles.text, textStyles]}>{text}</CustomText>
        {check ? (
          <MaterialCommunityIcons
            name={"check-box-outline"}
            size={30}
            color={appStyles.colors.green}
          />
        ) : (
          <MaterialCommunityIcons
            name={"checkbox-blank-outline"}
            size={30}
            color={appStyles.colors.red}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderStyle: "solid",
    borderColor: appStyles.colors.primary,
    borderRadius: 5,
    borderWidth: 1,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
  },
  text: {
    color: appStyles.colors.primary,
  },
});
