import { FC, ReactNode } from "react";
import "../../layouts/MainLayout/style.scss";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-main-layout");
const headerClass = scope.and("header");
const introClass = scope.and("intro");
const primaryContentClass = scope.and("primaryContent");
const authContentClass = scope.and("authContent");
const secondaryContentClass = scope.and("secondaryContent");
const footerClass = scope.and("footer");
const headerBackgroundClass = scope.and("headerBackground");

interface Props {
  header?: ReactNode;
  intro?: ReactNode;
  primaryContent?: ReactNode;
  authContent?: ReactNode;
  secondaryContent?: ReactNode;
  footer?: ReactNode;
}

export const MainLayout: FC<Props> = ({
  header,
  primaryContent,
  authContent,
  footer,
  secondaryContent,
  intro,
}) => (
  <div className={scope}>
    <div className={headerClass}>{header}</div>
    <div className={headerBackgroundClass}></div>
    <div className={introClass}>{intro}</div>
    <div className={primaryContentClass}>{primaryContent}</div>
    <div className={authContentClass}>{authContent}</div>
    <div className={secondaryContentClass}>{secondaryContent}</div>
    <div className={footerClass}>{footer}</div>
  </div>
);
