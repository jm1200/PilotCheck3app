import { Formik } from "formik";
import React from "react";

interface CustomFormProps {
  initialValues: any;
  onSubmit: any;
  validationSchema?: any;
}

export const CustomForm: React.FC<CustomFormProps> = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};
