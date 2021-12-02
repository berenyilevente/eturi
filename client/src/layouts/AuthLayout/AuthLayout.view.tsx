import "../../layouts/AuthLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import Card from "../../components/Card";

const scope = CreateScopeCSS("layouts-auth-layout");
const titleClass = scope.and("title");
const iconClass = scope.and("icon");
const emailClass = scope.and("email");
const passwordClass = scope.and("password");
const resetPasswordClass = scope.and("resetPassword");
const signUpButtonClass = scope.and("signUpButton");
const helperTextClass = scope.and("helperText");
const googleButtonClass = scope.and("googleButton");
const firstNameContainer = scope.and("firstNameContainer");
const lastNameContainer = scope.and("lastNameContainer");

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
  googleButton?: ReactNode;
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
  googleButton,
}) => (
  <Card backgroundColorStyle="white" shadow className={scope}>
    <div className={iconClass}>{icon}</div>
    <div className={titleClass}>{title}</div>
    <div className={firstNameContainer}>{firstNameInput}</div>
    <div className={lastNameContainer}>{lastNameInput}</div>
    <div className={emailClass}>{email}</div>
    <div className={passwordClass}>{password}</div>
    <div className={resetPasswordClass}>{repeatPassword}</div>
    <div className={signUpButtonClass}>{actionButton}</div>
    <div className={helperTextClass}>{helperText}</div>
    <div className={googleButtonClass}>{googleButton}</div>
  </Card>
);
