import { FC, ReactNode } from "react";
import "../../layouts/MainLayout/style.scss";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-main-layout");
const headerClass = scope.and("header");
const introClass = scope.and("intro");
const siteContentClass = scope.and("siteContent");
const footerClass = scope.and("footer");

interface Props {
  header?: ReactNode;
  intro?: ReactNode;
  siteContent?: ReactNode;
  footer?: ReactNode;
}

export const MainLayout: FC<Props> = ({
  header,
  siteContent,
  footer,
  intro,
}) => (
  <div className={scope}>
    <div className={headerClass}>{header}</div>
    <div className={introClass}>{intro}</div>
    <div className={siteContentClass}>{siteContent}</div>
    <div className={footerClass}>{footer}</div>
  </div>
);
