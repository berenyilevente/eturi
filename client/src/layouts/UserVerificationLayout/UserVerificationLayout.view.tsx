import "../../layouts/UserVerificationLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-user-verification-layout");
const textField = scope.and("textField");
const iconField = scope.and("iconField");
const buttonClass = scope.and("buttonClass");

interface Props {
  title?: ReactNode;
  text?: ReactNode;
  button?: ReactNode;
  icon?: ReactNode;
}

export const UserVerificationLayout: FC<Props> = ({
  title,
  text,
  button,
  icon,
}) => (
  <div className={scope}>
    <div className={textField}>
      <div>{title}</div>
      <div>{text}</div>
      <div className={buttonClass}>{button}</div>
    </div>
    <div className={iconField}>
      <div>{icon}</div>
    </div>
  </div>
);
