import "../../layouts/EditClothesDetailsLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-edit-clothes-details-layout");
const example = scope.and("example");

interface Props {
  brand?: ReactNode;
  name?: ReactNode;
  description?: ReactNode;
  category?: ReactNode;
  size?: ReactNode;
  condition?: ReactNode;
  colour?: ReactNode;
  price?: ReactNode;
}

export const EditClothesDetailsLayout: FC<Props> = ({
  brand,
  name,
  description,
  category,
  size,
  condition,
  colour,
  price,
}) => (
  <div className={scope}>
    <div>{brand}</div>
    <div>{name}</div>
    <div>{description}</div>
    <div>{category}</div>
    <div>{size}</div>
    <div>{condition}</div>
    <div>{colour}</div>
    <div>{price}</div>
  </div>
);
