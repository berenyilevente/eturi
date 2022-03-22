import "../../components/Pagination/style.scss";
import { FC } from "react";
import { CreateScopeCSS } from "../utils";
import { Link } from "react-router-dom";

const scope = CreateScopeCSS("components-pagination");

interface Props {
  totalClothes?: number;
  clothesPerPage?: number;
  paginate?: any;
  page: string | number;
}

const Pagination: FC<Props> = ({ totalClothes, clothesPerPage, paginate }) => {
  const pageNumbers = [];

  let index = 0;

  for (index; index <= Math.ceil(totalClothes! / clothesPerPage!); index++)
    pageNumbers.push(index);

  return (
    <nav className={scope}>
      <ul className="pagination">
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
      </ul>
    </nav>
  );
};

export default Pagination;
