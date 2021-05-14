import { useNavigation } from "@react-navigation/native";
import { FormikConfig } from "formik";
import React, { useState } from "react";
// import { routes } from "../../navigation/routes";
import { CustomForm } from "./formComponents/CustomForm";
import { CustomTextInputFormField } from "./formComponents/CustomTextInputFormField";
import { SubmitButton } from "./formComponents/SubmitButton";
import { ErrorMessage } from "./formComponents/ErrorMessage";
import { loginSchema as validationSchema } from "./validation";

interface LoginFormProps {}

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const handleSubmit: FormikConfig<FormValues>["onSubmit"] = (values) => {
    console.log("TODO: handle login", values);
    // login(values.email, values.password)
    //   .then(() => navigation.navigate(routes.WELCOME_SCREEN))
    //   .catch((err) =>
    //     setError(
    //       "Their was an error logging in. Please check your email or password and try again"
    //     )
    //   );
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
