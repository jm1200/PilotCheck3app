import * as Yup from "yup";

const order = Yup.number()
  .typeError("Must be a number.")
  .positive("Must be a positive number.")
  .required("Order must be a number between 1-99")
  .min(1)
  .max(99);

export const addEditCheckFormSchema = Yup.object().shape({
  checkTitle: Yup.string().required().max(50).label("Check Title"),
  order,
});

export const addEditFolderSchema = Yup.object().shape({
  newTitle: Yup.string().required().max(50).label("Folder Title"),
  order,
});

export const addEditNoteSchema = Yup.object().shape({
  noteTitle: Yup.string().required().max(50).label("Check Title"),
  order,
  note: Yup.string().required().label("Note Field"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export const registrationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
