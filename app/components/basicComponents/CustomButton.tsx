import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appStyles } from "../../config/appStyles";
import { CustomText } from "./CustomText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CustomButtonProps {
  text?: string;
  onPress: any;
  containerStyles?: any;
  textStyles?: any;
  bgColor?: string;
  icon?: {
    name: string;
    size: number;
    color: string;
  };
  checklistButton?: boolean;
  checkValue?: boolean;
  active?: boolean;
  showNavIcon?: boolean;
  testID?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onPress,
  containerStyles,
  textStyles,
  bgColor = appStyles.colors.primary,
  icon,
  checklistButton = false,
  checkValue = false,
  active = false,
  showNavIcon = false,
  testID = "",
}) => {
  let CheckComponent = checkValue ? (
    <MaterialCommunityIcons
      name={"check-box-outline"}
      size={22}
      color={appStyles.colors.green}
    />
  ) : (
    <MaterialCommunityIcons
      name={"checkbox-blank-outline"}
      size={22}
      color={appStyles.colors.red}
    />
  );

  return (
    <TouchableOpacity
      style={[styles.container, containerStyles, { backgroundColor: bgColor }]}
      onPress={onPress}
      testID={testID}
    >
      {!!icon && (
        <View style={{ marginLeft: 10 }}>
          <MaterialCommunityIcons
            name={icon.name}
            size={icon.size}
            color={icon.color}
          />
        </View>
      )}
      {!!text && (
        <CustomText style={[styles.text, textStyles]}>{text}</CustomText>
      )}
      {checklistButton && CheckComponent}
      {showNavIcon && active && (
        <MaterialCommunityIcons
          name={"arrow-right"}
          size={20}
          color={"white"}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: appStyles.colors.white,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "solid",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: appStyles.colors.white,
  },
});
