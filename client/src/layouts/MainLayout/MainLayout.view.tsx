import { FC, ReactNode } from "react";
import "../../layouts/MainLayout/style.scss";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-main-layout");
const headerClass = scope.and("header");
const introClass = scope.and("intro");
const siteContentClass = scope.and("siteContent");
const authContentClass = scope.and("authContent");
const footerClass = scope.and("footer");
const headerBackgroundClass = scope.and("headerBackground");

interface Props {
  header?: ReactNode;
  intro?: ReactNode;
  siteContent?: ReactNode;
  authContent?: ReactNode;
  footer?: ReactNode;
}

export const MainLayout: FC<Props> = ({
  header,
  siteContent,
  authContent,
  footer,
  intro,
}) => (
  <div className={scope}>
    <div className={headerClass}>{header}</div>
    <div className={headerBackgroundClass}></div>
    <div className={introClass}>{intro}</div>
    <div className={siteContentClass}>{siteContent}</div>
    <div className={authContentClass}>{authContent}</div>
    <div className={footerClass}>{footer}</div>
  </div>
);
