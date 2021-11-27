import "../../layouts/EditClothesLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-edit-clothes-layout");
const imageContainerClass = scope.and("imageContainer");
const detailsContainerClass = scope.and("detailsContainer");

interface Props {
  imageArea?: ReactNode;
  detailsArea?: ReactNode;
}

export const EditClothesLayout: FC<Props> = ({ imageArea, detailsArea }) => (
  <div className={scope}>
    <div className={imageContainerClass}>{imageArea}</div>
    <div className={detailsContainerClass}>{detailsArea}</div>
  </div>
);
