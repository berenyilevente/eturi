import "../../layouts/ShowClothesDetailsLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-show-clothes-details-layout");
const headerClass = scope.and("header");
const buttonAreaClass = scope.and("buttonArea");
const lineClass = scope.and("line");
const descriptionArea = scope.and("descriptionArea");

interface Props {
  brand?: ReactNode;
  name?: ReactNode;
  description?: ReactNode;
  category?: ReactNode;
  size?: ReactNode;
  condition?: ReactNode;
  colour?: ReactNode;
  price?: ReactNode;
  nameTitle?: ReactNode;
  descriptionTitle?: ReactNode;
  categoryTitle?: ReactNode;
  sizeTitle?: ReactNode;
  conditionTitle?: ReactNode;
  colourTitle?: ReactNode;
  priceTitle?: ReactNode;
  buttons?: ReactNode;
  line1?: ReactNode;
  line2?: ReactNode;
}

export const ShowClothesDetailsLayout: FC<Props> = ({
  brand,
  name,
  description,
  category,
  size,
  condition,
  colour,
  price,
  nameTitle,
  descriptionTitle,
  categoryTitle,
  sizeTitle,
  conditionTitle,
  colourTitle,
  priceTitle,
  buttons,
  line1,
  line2,
}) => (
  <div className={scope}>
    <div className={headerClass}>{brand}</div>
    <div>{nameTitle}</div>
    <div>{name}</div>
    <div>{descriptionTitle}</div>
    <div>{description}</div>
    <div className={lineClass}>{line1}</div>
    <div>{categoryTitle}</div>
    <div>{category}</div>
    <div>{sizeTitle}</div>
    <div>{size}</div>
    <div>{conditionTitle}</div>
    <div>{condition}</div>
    <div>{colourTitle}</div>
    <div>{colour}</div>
    <div className={lineClass}>{line2}</div>
    <div>{priceTitle}</div>
    <div>{price}</div>
    <div className={buttonAreaClass}>{buttons}</div>
  </div>
);
