import "../../layouts/NoSearchResultLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-no-search-result-layout");
const iconClass = scope.and("icon");

interface Props {
  noResultText?: ReactNode;
  icon?: ReactNode;
}

export const NoSearchResultLayout: FC<Props> = ({ noResultText, icon }) => (
  <div className={scope}>
    <div>{noResultText}</div>
    <div className={iconClass}>{icon}</div>
  </div>
);
