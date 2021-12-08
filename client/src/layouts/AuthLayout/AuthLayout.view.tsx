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
const positionRelative = scope.and("positionRelative");

interface Props {
  icon?: ReactNode;
  title?: ReactNode;
  firstNameInput?: ReactNode;
  lastNameInput?: ReactNode;
  email?: ReactNode;
  password?: ReactNode;
  confirmPassword?: ReactNode;
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
  confirmPassword,
  actionButton,
  helperText,
  googleButton,
}) => (
  <Card backgroundColorStyle="white" shadow className={scope}>
    <div className={iconClass}>{icon}</div>
    <div className={titleClass}>{title}</div>
    <div className={cn(firstNameContainer, positionRelative)}>
      {firstNameInput}
    </div>
    <div className={cn(lastNameContainer, positionRelative)}>
      {lastNameInput}
    </div>
    <div className={cn(emailClass, positionRelative)}>{email}</div>
    <div className={cn(passwordClass, positionRelative)}>{password}</div>
    <div className={cn(resetPasswordClass, positionRelative)}>
      {confirmPassword}
    </div>
    <div className={signUpButtonClass}>{actionButton}</div>
    <div className={helperTextClass}>{helperText}</div>
    <div className={googleButtonClass}>{googleButton}</div>
  </Card>
);
