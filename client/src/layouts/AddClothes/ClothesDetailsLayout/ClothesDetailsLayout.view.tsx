import "../ClothesDetailsLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../../components/utils";

const scope = CreateScopeCSS("layouts-clothes-details-layout");
const lineClass = scope.and("line");
const categoriesClass = scope.and("categoriesClass");
const colSpan = scope.and("colSpan");

interface Props {
  category: ReactNode;
  categoryDropdown: ReactNode;
  secondCategoryDropdown?: ReactNode;
  brand: ReactNode;
  brandDropdown: ReactNode;
  condition: ReactNode;
  conditionDropdown: ReactNode;
  line1: ReactNode;
  line2: ReactNode;
  line3: ReactNode;
  line4: ReactNode;
  size?: ReactNode;
  sizeDropdown?: ReactNode;
  colour?: ReactNode;
  colourDropdown?: ReactNode;
}

export const ClothesDetailsLayout: FC<Props> = ({
  category,
  categoryDropdown,
  brand,
  brandDropdown,
  condition,
  conditionDropdown,
  line1,
  line2,
  line3,
  line4,
  size,
  sizeDropdown,
  colour,
  colourDropdown,
  secondCategoryDropdown,
}) => (
  <div className={scope}>
    <div className={colSpan}>{category}</div>
    <div className={colSpan}>{categoryDropdown}</div>
    <div className={cn(categoriesClass, colSpan)}>{secondCategoryDropdown}</div>
    <div className={lineClass}>{line1}</div>
    <div className={colSpan}>{brand}</div>
    <div className={colSpan}>{brandDropdown}</div>
    <div className={lineClass}>{line2}</div>
    <div className={colSpan}>{size}</div>
    <div className={colSpan}>{sizeDropdown}</div>
    <div className={lineClass}>{line4}</div>
    <div className={colSpan}>{condition}</div>
    <div className={colSpan}>{conditionDropdown}</div>
    <div className={lineClass}>{line3}</div>
    <div className={colSpan}>{colour}</div>
    <div className={colSpan}>{colourDropdown}</div>
  </div>
);
