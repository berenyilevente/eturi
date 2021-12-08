export interface IAuthValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const validateAuthInfo = (values: IAuthValues) => {
  let errors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  if (!values.firstName.trim()) {
    errors.firstName = "First name required";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Last name required";
  }
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password.trim()) {
    errors.password = "Password required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters and more";
  }
  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = "Password required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};

/*Password regex:
/^[\w]{8,20}$/
*/
