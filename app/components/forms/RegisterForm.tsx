import { useNavigation } from "@react-navigation/native";
import { FormikConfig } from "formik";
import React, { useState } from "react";
import { routes } from "../../navigation/routes";
// import { register } from "../../services/firebase";
import { CustomForm } from "./formComponents/CustomForm";
import { CustomTextInputFormField } from "./formComponents/CustomTextInputFormField";
import { registrationSchema as validationSchema } from "./validation";
import { SubmitButton } from "./formComponents/SubmitButton";
import { ErrorMessage } from "./formComponents/ErrorMessage";

interface RegisterFormProps {}

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const handleSubmit: FormikConfig<FormValues>["onSubmit"] = (values) => {
    console.log("TODO: Handle register");
    // register(values.email, values.password)
    //   .then(() => navigation.navigate(routes.WELCOME_SCREEN))
    //   .catch((err) => setError("Their was an error with registration."));

    navigation.navigate(routes.WELCOME_SCREEN);
  };
  return (
    <CustomForm
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <CustomTextInputFormField
        name="name"
        autoCapitalize="none"
        textContentType="name"
        placeholder="Name"
        autoCorrect={false}
        icon="account"
      />
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

      <SubmitButton title="Register" />
      <ErrorMessage visible={!!error} error={error} />
    </CustomForm>
  );
};
