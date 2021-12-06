import "../../layouts/SearchLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-search-layout");
const searchAreaClass = scope.and("searchArea");
const activeFiltersClass = scope.and("activeFiltersClass");

interface Props {
  searchTitle?: ReactNode;
  searchField?: ReactNode;
  searchButton?: ReactNode;
  line?: ReactNode;
  clothesListing?: ReactNode;
  filterButton?: ReactNode;
  activeFiltersTitle?: ReactNode;
  activeFilters?: ReactNode;
  clearFilters?: ReactNode;
}

export const SearchLayout: FC<Props> = ({
  searchField,
  searchButton,
  line,
  clothesListing,
  searchTitle,
  filterButton,
  activeFiltersTitle,
  activeFilters,
  clearFilters,
}) => (
  <div className={scope}>
    <div>{searchTitle}</div>
    <div className={searchAreaClass}>
      <div>{searchField}</div>
      <div>{searchButton}</div>
      <div>{filterButton}</div>
    </div>
    <div>
      <div>{activeFiltersTitle}</div>
      <div>{clearFilters}</div>
      <div className={activeFiltersClass}>{activeFilters}</div>
    </div>
    <div>{line}</div>
    <div>{clothesListing}</div>
  </div>
);
