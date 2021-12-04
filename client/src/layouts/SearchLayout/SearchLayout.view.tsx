import "../../layouts/SearchLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-search-layout");
const example = scope.and("example");

interface Props {
  searchField?: ReactNode;
  clothesCard?: ReactNode;
}

export const SearchLayout: FC<Props> = ({ searchField }) => (
  <div className={scope}>
    <div>{searchField}</div>
  </div>
);
