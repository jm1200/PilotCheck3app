import { useNavigation } from "@react-navigation/native";
import { FormikConfig } from "formik";
import React, { useState } from "react";
// import { routes } from "../../navigation/routes";
import { CustomForm } from "./formComponents/CustomForm";
import { CustomTextInputFormField } from "./formComponents/CustomTextInputFormField";
import { SubmitButton } from "./formComponents/SubmitButton";
import { ErrorMessage } from "./formComponents/ErrorMessage";
import { loginSchema as validationSchema } from "./validation";
import { MeDocument, MeQuery, useLoginMutation } from "../../generated/graphql";
import { routes } from "../../navigation/routes";
import { useAuth } from "../../providers/AuthProvider";

interface LoginFormProps {}

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const navigation = useNavigation();
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const handleSubmit: FormikConfig<FormValues>["onSubmit"] = async (values) => {
    try {
      const response = await signin!(values);

      if (response.data?.login.errors) {
        setError("error");
      } else if (response.data?.login.user) {
        navigation.navigate(routes.WELCOME_SCREEN);
      }
    } catch (error) {
      console.log("LoginForm.tsx 28 error:", error);
    }
  };
  return (
    <CustomForm
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <CustomTextInputFormField
        name="email"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Email"
        autoCorrect={false}
        icon="email"
      />

      <CustomTextInputFormField
        name="password"
        autoCapitalize="none"
        textContentType="password"
        secureTextEntry
        placeholder="Password"
        autoCorrect={false}
        icon="lock"
      />

      <SubmitButton title="Login" />
      <ErrorMessage visible={!!error} error={error} />
    </CustomForm>
  );
};
