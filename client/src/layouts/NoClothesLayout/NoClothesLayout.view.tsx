import "../../layouts/NoClothesLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-no-clothes-layout");
const iconClass = scope.and("iconClass");

interface Props {
  icon?: ReactNode;
  titleText?: ReactNode;
  button?: ReactNode;
}

export const NoClothesLayout: FC<Props> = ({ icon, titleText, button }) => (
  <div className={scope}>
    <div>{titleText}</div>
    <div>{button}</div>
    <div className={iconClass}>{icon}</div>
  </div>
);
