import React from "react";
import { Text, StyleSheet } from "react-native";
import { appStyles } from "../../config/appStyles";

interface CustomTextProps {
  children: any;
  style?: {};
  testID?: string;
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  ...props
}: CustomTextProps) => {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: appStyles.fontFamily,
    color: "black",
  },
});
