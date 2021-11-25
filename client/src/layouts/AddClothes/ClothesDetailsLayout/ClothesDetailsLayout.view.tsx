import "../ClothesDetailsLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../../components/utils";

const scope = CreateScopeCSS("layouts-clothes-details-layout");
const lineClass = scope.and("line");

interface Props {
  category: ReactNode;
  categoryDropdown: ReactNode;
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
}) => (
  <div className={scope}>
    <div>{category}</div>
    <div>{categoryDropdown}</div>
    <div className={lineClass}>{line1}</div>
    <div>{brand}</div>
    <div>{brandDropdown}</div>
    <div className={lineClass}>{line2}</div>
    <div>{size}</div>
    <div>{sizeDropdown}</div>
    <div className={lineClass}>{line4}</div>
    <div>{condition}</div>
    <div>{conditionDropdown}</div>
    <div className={lineClass}>{line3}</div>
    <div>{colour}</div>
    <div>{colourDropdown}</div>
  </div>
);
