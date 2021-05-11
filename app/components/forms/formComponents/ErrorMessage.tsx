import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import { appStyles } from "../../../config/appStyles";
import { CustomText } from "../../basicComponents/CustomText";

interface ErrorMessageProps {
  error:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  visible: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  visible,
}) => {
  if (!visible || !error) return null;
  return <CustomText style={styles.text}>{error}</CustomText>;
};

const styles = StyleSheet.create({
  text: {
    color: appStyles.colors.error,
    fontSize: 18,
    fontWeight: "bold",
  },
});
