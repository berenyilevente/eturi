import "./style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../../components/utils";

const scope = CreateScopeCSS("layouts-add-clothes-layout");
const uploadAreaClass = scope.and("uploadArea");
const descriptionAreaClass = scope.and("descriptionArea");
const detailsAreaClass = scope.and("detailsArea");
const priceAreaClass = scope.and("priceArea");
const buttonsClass = scope.and("buttonArea");

interface Props {
  title: ReactNode;
  pictureUploadArea: ReactNode;
  descriptionArea: ReactNode;
  clothesDetailsArea: ReactNode;
  priceArea: ReactNode;
  buttons: ReactNode;
}

export const AddClothesLayout: FC<Props> = ({
  title,
  pictureUploadArea,
  descriptionArea,
  clothesDetailsArea,
  priceArea,
  buttons,
}) => (
  <div className={scope}>
    <div>{title}</div>
    <div className={uploadAreaClass}>{pictureUploadArea}</div>
    <div className={descriptionAreaClass}>{descriptionArea}</div>
    <div className={detailsAreaClass}>{clothesDetailsArea}</div>
    <div className={priceAreaClass}>{priceArea}</div>
    <div className={buttonsClass}>{buttons}</div>
  </div>
);
