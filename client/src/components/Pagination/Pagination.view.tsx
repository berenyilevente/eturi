import "../../components/Pagination/style.scss";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../../redux/clothes/clothes.actions";
import { AppState } from "@/redux/store";
import ReactPaginate from "react-paginate";
import Icon from "../Icon";

const scope = CreateScopeCSS("components-pagination");
const iconClass = scope.and("iconClass");

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
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();

  const pageNumbers = [];

  let index = 0;
  const page = query.get(`page=${index}`)!;

  const goLeft = () => {
    console.log(page);
  };

  const goRight = () => {};

  for (index; index <= Math.ceil(totalClothes! / clothesPerPage!); index++)
    pageNumbers.push(index);

  return (
    <nav className={scope}>
      <ul className="pagination">
        <Icon
          className={iconClass}
          iconType="chevronLeftIcon"
          colorStyle="darkBlue"
          cursor
          onClick={() => goLeft()}
        />
        {pageNumbers
          .map((number) => (
            <div key={number}>
              <li className="page-item">
                <Link
                  to={`/clothes?:page=${number}`}
                  onClick={() => paginate(number)}
                  className="page-link"
                >
                  {number}
                </Link>
              </li>
            </div>
          ))
          .slice(1)}
        <Icon
          className={iconClass}
          iconType="chevronRightIcon"
          colorStyle="darkBlue"
          cursor
          onClick={() => goRight()}
        />
      </ul>
    </nav>
  );
};
