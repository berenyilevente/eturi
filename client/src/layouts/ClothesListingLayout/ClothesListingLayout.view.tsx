import "../../layouts/ClothesListingLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-clothes-listing-layout");
const imageContainerClass = scope.and("imageContainer");
const detailsContainerClass = scope.and("detailsContainer");
const heartIconClass = scope.and("heartIcon");
const spanAllRows = scope.and("spanAllRows");

interface Props {
  image?: ReactNode;
  price?: ReactNode;
  size?: ReactNode;
  brand?: ReactNode;
  heartIcon?: ReactNode;
}

export const ClothesListingLayout: FC<Props> = ({
  image,
  price,
  size,
  brand,
  heartIcon,
}) => (
  <div className={scope}>
    <div className={imageContainerClass}>{image}</div>
    <div className={detailsContainerClass}>
      <div>{price}</div>
      <div className={heartIconClass}>{heartIcon}</div>
      <div className={spanAllRows}>{size}</div>
      <div className={spanAllRows}>{brand}</div>
    </div>
  </div>
);
