import "../../layouts/SearchLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-search-layout");
const searchAreaClass = scope.and("searchArea");

interface Props {
  searchTitle?: ReactNode;
  searchField?: ReactNode;
  searchButton?: ReactNode;
  line?: ReactNode;
  filterButton?: ReactNode;
}

export const SearchLayout: FC<Props> = ({
  searchField,
  searchButton,
  line,
  searchTitle,
  filterButton,
}) => (
  <div className={scope}>
    <div>{searchTitle}</div>
    <div className={searchAreaClass}>
      <div>{searchField}</div>
      <div>{searchButton}</div>
      <div>{filterButton}</div>
    </div>
    <div>{line}</div>
  </div>
);
