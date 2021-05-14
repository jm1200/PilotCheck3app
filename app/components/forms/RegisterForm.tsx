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
import { useRegisterMutation } from "../../generated/graphql";

interface RegisterFormProps {}

interface FormValues {
  email: string;
  password: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const navigation = useNavigation();
  const [error, setError] = useState("");

  const [register] = useRegisterMutation();
  const handleSubmit: FormikConfig<FormValues>["onSubmit"] = async (values) => {
    console.log("TODO: Handle register", values);

    try {
      let res = await register({ variables: { options: values } });

      console.log("RegisterForm.tsx 32 res:", res);
    } catch (error) {
      console.log("RegisterForm.tsx 34 error:", error);
    }
    // register(values.email, values.password)
    //   .then(() => navigation.navigate(routes.WELCOME_SCREEN))
    //   .catch((err) => setError("Their was an error with registration."));

    // navigation.navigate(routes.WELCOME_SCREEN);
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

      <SubmitButton title="Register" />
      <ErrorMessage visible={!!error} error={error} />
    </CustomForm>
  );
};
