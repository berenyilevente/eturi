import "../../layouts/ShowClothesDetailsLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-show-clothes-details-layout");
const imageAreaClass = scope.and("imageAreaClass");
const headerClass = scope.and("header");
const nameTitleClass = scope.and("nameTitleClass");
const nameContentClass = scope.and("nameContentClass");
const buttonAreaClass = scope.and("buttonArea");
const lineClass = scope.and("line");
const saveButtonClass = scope.and("saveButton");
const likeIconClass = scope.and("likeIconClass");
const backButtonClass = scope.and("backButton");
const descriptionTitleClass = scope.and("descriptionTitle");
const descriptionAreaClass = scope.and("descriptionArea");
const marginBottom = scope.and("marginBottom");
interface Props {
  imageArea?: ReactNode;
  brand?: ReactNode;
  likeIcon?: ReactNode;
  editBrandTitle?: ReactNode;
  editBrand?: ReactNode;
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
  deleteButton?: ReactNode;
  backButton?: ReactNode;
}

export const ShowClothesDetailsLayout: FC<Props> = ({
  imageArea,
  brand,
  likeIcon,
  editBrandTitle,
  editBrand,
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
  deleteButton,
  backButton,
}) => (
  <div className={scope}>
    <div className={headerClass}>{brand}</div>
    <div className={likeIconClass}>{likeIcon}</div>
    <div className={nameTitleClass}>{nameTitle}</div>
    <div className={nameContentClass}>{name}</div>
    <div>{descriptionTitle}</div>
    <div>{description}</div>
    <div className={lineClass}>{line1}</div>
    <div>{categoryTitle}</div>
    <div>{category}</div>
    <div>{editBrandTitle}</div>
    <div>{editBrand}</div>
    <div>{sizeTitle}</div>
    <div>{size}</div>
    <div>{conditionTitle}</div>
    <div>{condition}</div>
    <div>{colourTitle}</div>
    <div>{colour}</div>
    <div className={lineClass}>{line2}</div>
    <div>{priceTitle}</div>
    <div>{price}</div>
    <div className={imageAreaClass}>{imageArea}</div>
    <div className={buttonAreaClass}>
      <div className={backButtonClass}>{backButton}</div>
      <div>{deleteButton}</div>
      <div className={saveButtonClass}>{buttons}</div>
    </div>
    <div className={marginBottom}></div>
  </div>
);
