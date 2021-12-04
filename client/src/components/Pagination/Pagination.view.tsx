import "../../components/Pagination/style.scss";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../../redux/clothes/clothes.actions";
import { AppState } from "@/redux/store";
import ReactPaginate from "react-paginate";

const scope = CreateScopeCSS("components-pagination");
const example = scope.and("example");

interface Props {
  totalClothes?: number;
  page: string | number;
  renderItem?(item: any): ReactNode;
}

export const Pagination: FC<Props> = ({ totalClothes, page, renderItem }) => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);

  const clothesPerPage = 10;
  const pagesVisited = pageNumber * clothesPerPage;

  return (
    <div className={scope}>
      <ul className="pagination"></ul>
    </div>
  );
};
