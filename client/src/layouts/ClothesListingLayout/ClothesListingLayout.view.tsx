import "../../layouts/ClothesListingLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-clothes-listing-layout");
const imageContainerClass = scope.and("imageContainer");

interface Props {
  image?: ReactNode;
  price?: ReactNode;
  size?: ReactNode;
  brand?: ReactNode;
}

export const ClothesListingLayout: FC<Props> = ({
  image,
  price,
  size,
  brand,
}) => (
  <div className={scope}>
    <div className={imageContainerClass}>{image}</div>
    <div>{price}</div>
    <div>{size}</div>
    <div>{brand}</div>
  </div>
);
