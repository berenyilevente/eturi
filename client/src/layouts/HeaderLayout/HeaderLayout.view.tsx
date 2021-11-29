import "../../layouts/HeaderLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-header-layout");
const logoClass = scope.and("logo");
const navItemsClass = scope.and("navItems");

interface Props {
  logo?: ReactNode;
  navItems?: ReactNode;
}

export const HeaderLayout: FC<Props> = ({ logo, navItems }) => (
  <div className={cn(scope)}>
    <div className={logoClass}>{logo}</div>
    <div className={navItemsClass}>{navItems}</div>
  </div>
);
