import "../../layouts/LoginLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import Card from "../../components/Card";

const scope = CreateScopeCSS("layouts-login-layout");
const titleClass = scope.and("title");
const iconClass = scope.and("icon");
const emailClass = scope.and("email");
const passwordClass = scope.and("password");
const loginButtonClass = scope.and("loginButton");
const helperTextClass = scope.and("helperText");
const googleButtonClass = scope.and("googleButton");
const positionRelative = scope.and("positionRelative");

interface Props {
  icon?: ReactNode;
  title?: ReactNode;
  email?: ReactNode;
  password?: ReactNode;
  actionButton?: ReactNode;
  helperText?: ReactNode;
  googleButton?: ReactNode;
}

const LoginLayout: FC<Props> = ({
  icon,
  title,
  email,
  password,
  actionButton,
  helperText,
  googleButton,
}) => (
  <Card backgroundColorStyle="white" className={scope} shadow>
    <div className={iconClass}>{icon}</div>
    <div className={titleClass}>{title}</div>
    <div className={cn(emailClass, positionRelative)}>{email}</div>
    <div className={cn(passwordClass, positionRelative)}>{password}</div>
    <div className={loginButtonClass}>{actionButton}</div>
    <div className={helperTextClass}>{helperText}</div>
    <div className={googleButtonClass}>{googleButton}</div>
  </Card>
);

export default LoginLayout;
