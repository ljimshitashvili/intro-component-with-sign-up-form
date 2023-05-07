import * as yup from "yup";

const scheme = yup.object().shape({
  firstName: yup.string().required("First Name cannot be empty"),
  lastName: yup.string().required("Last Name cannot be empty"),
  email: yup
    .string()
    .required("Looks like this is not an email")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password cannot be empty")
    .min(6, "Password must be between 6-20")
    .max(20, "Password must be between 6-20"),
});

export default scheme;
