import "../../layouts/AuthLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-auth-layout");
const titleClass = scope.and("title");
const iconClass = scope.and("icon");
const emailClass = scope.and("email");
const passwordClass = scope.and("password");
const resetPasswordClass = scope.and("resetPassword");
const signUpClass = scope.and("signUp");
const helperTextClass = scope.and("helperText");

interface Props {
  icon?: ReactNode;
  title?: ReactNode;
  firstNameInput?: ReactNode;
  lastNameInput?: ReactNode;
  email?: ReactNode;
  password?: ReactNode;
  repeatPassword?: ReactNode;
  actionButton?: ReactNode;
  helperText?: ReactNode;
}

export const AuthLayout: FC<Props> = ({
  icon,
  title,
  firstNameInput,
  lastNameInput,
  email,
  password,
  repeatPassword,
  actionButton,
  helperText,
}) => (
  <div className={scope}>
    <div className={iconClass}>{icon}</div>
    <div className={titleClass}>{title}</div>
    <div>{firstNameInput}</div>
    <div>{lastNameInput}</div>
    <div className={emailClass}>{email}</div>
    <div className={passwordClass}>{password}</div>
    <div className={resetPasswordClass}>{repeatPassword}</div>
    <div className={signUpClass}>{actionButton}</div>
    <div className={helperTextClass}>{helperText}</div>
  </div>
);
