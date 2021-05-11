import { useFormikContext } from "formik";
import React from "react";
import { CustomButton } from "../../basicComponents/CustomButton";

interface SubmitButtonProps {
  title: string;
  containerStyles?: any;
  textStyles?: any;
  testID?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  ...props
}) => {
  const { handleSubmit } = useFormikContext();
  return <CustomButton text={title} onPress={handleSubmit} {...props} />;
};
