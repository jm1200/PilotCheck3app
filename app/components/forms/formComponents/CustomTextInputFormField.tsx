import { ErrorMessage } from "./ErrorMessage";
import React from "react";
import { CustomTextInput } from "./CustomTextInput";
import { useFormikContext } from "formik";
import { KeyboardType, TextContentType } from "../../../types/types";

interface CustomTextInputFormFieldProps {
  name: string;
  keyboardType?: KeyboardType;
  textContentType?: TextContentType;
  [x: string]: any;
}

export const CustomTextInputFormField: React.FC<CustomTextInputFormFieldProps> = ({
  name,
  ...props
}) => {
  const {
    touched,
    errors,
    setFieldTouched,
    setFieldValue,
    values,
  } = useFormikContext<CustomTextInputFormFieldProps>();
  return (
    <>
      <CustomTextInput
        {...props}
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};
