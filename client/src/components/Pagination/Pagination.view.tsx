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
  clothesPerPage?: number;
  paginate?: any;
  page: string | number;
}

export const Pagination: FC<Props> = ({
  totalClothes,
  clothesPerPage,
  paginate,
}) => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(0);

  const pageNumbers = [];

  for (
    let index = 1;
    index <= Math.ceil(totalClothes! / clothesPerPage!);
    index++
  )
    pageNumbers.push(index);

  return (
    <div className={scope}>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Link
                to={`/clothes?:page=${number}`}
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
