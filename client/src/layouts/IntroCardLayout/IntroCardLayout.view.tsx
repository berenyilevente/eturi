import "../../layouts/IntroCardLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-intro-card-layout");
const linkClass = scope.and("link");
const buttonClass = scope.and("buttonClass");

interface Props {
  header: ReactNode;
  button: ReactNode;
  link: ReactNode;
}

export const IntroCardLayout: FC<Props> = ({ header, button, link }) => (
  <div className={scope}>
    <div>{header}</div>
    <div className={buttonClass}>{button}</div>
    <div className={linkClass}>{link}</div>
  </div>
);
