import "./style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../../components/utils";

const scope = CreateScopeCSS("layouts-add-clothes-layout");
const buttonsClass = scope.and("buttonArea");
const titleClass = scope.and("titleClass");

interface Props {
  title: ReactNode;
  pictureUploadArea: ReactNode;
  descriptionArea: ReactNode;
  clothesDetailsArea: ReactNode;
  priceArea: ReactNode;
  buttons: ReactNode;
}

const AddClothesLayout: FC<Props> = ({
  title,
  pictureUploadArea,
  descriptionArea,
  clothesDetailsArea,
  priceArea,
  buttons,
}) => (
  <div className={scope}>
    <div className={titleClass}>{title}</div>
    <div>{pictureUploadArea}</div>
    <div>{descriptionArea}</div>
    <div>{clothesDetailsArea}</div>
    <div>{priceArea}</div>
    <div className={buttonsClass}>{buttons}</div>
  </div>
);
export default AddClothesLayout;
