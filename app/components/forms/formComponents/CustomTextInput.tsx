import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { appStyles } from "../../../config/appStyles";

interface CustomTextInputProps extends TextInputProps {
  icon?: string;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  icon,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={appStyles.colors.medium}
          style={styles.icon}
        />
      )}

      <TextInput
        placeholderTextColor={appStyles.colors.medium}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.colors.light,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
    fontFamily: appStyles.fontFamily,
    color: appStyles.colors.dark,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
});
