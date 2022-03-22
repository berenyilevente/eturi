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
const colSpan = scope.and("colSpan");
const descriptionTitleClass = scope.and("descriptionTitle");
const descriptionContentClass = scope.and("descriptionArea");
const marginBottom = scope.and("marginBottom");
const editBrandClass = scope.and("editBrandClass");
const priceContentClass = scope.and("priceContentClass");
const dateContentClass = scope.and("dateContentClass");
const clothesTypeClass = scope.and("clothesTypeClass");

interface Props {
  imageArea?: ReactNode;
  brand?: ReactNode;
  likeIcon?: ReactNode;
  editBrand?: ReactNode;
  name?: ReactNode;
  description?: ReactNode;
  category?: ReactNode;
  clothingType?: ReactNode;
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
  createdAtTitle?: ReactNode;
  createdAt?: ReactNode;
}

const ShowClothesDetailsLayout: FC<Props> = ({
  imageArea,
  brand,
  likeIcon,
  editBrand,
  name,
  description,
  category,
  clothingType,
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
  createdAt,
  createdAtTitle,
}) => (
  <div className={scope}>
    <div className={headerClass}>{brand}</div>
    <div className={cn(editBrandClass, colSpan)}>{editBrand}</div>
    <div className={likeIconClass}>{likeIcon}</div>
    <div className={nameTitleClass}>{nameTitle}</div>
    <div className={cn(nameContentClass, colSpan)}>{name}</div>
    <div className={descriptionTitleClass}>{descriptionTitle}</div>
    <div className={cn(colSpan, descriptionContentClass)}>{description}</div>
    <div className={cn(lineClass)}>{line1}</div>
    <div>{categoryTitle}</div>
    <div className={colSpan}>{category}</div>
    <div className={cn(clothesTypeClass, colSpan)}>{clothingType}</div>
    <div>{sizeTitle}</div>
    <div className={colSpan}>{size}</div>
    <div>{conditionTitle}</div>
    <div className={colSpan}>{condition}</div>
    <div>{colourTitle}</div>
    <div className={colSpan}>{colour}</div>
    <div className={lineClass}>{line2}</div>
    <div>{priceTitle}</div>
    <div className={priceContentClass}>{price}</div>
    <div>{createdAtTitle}</div>
    <div className={dateContentClass}>{createdAt}</div>
    <div className={imageAreaClass}>{imageArea}</div>
    <div className={buttonAreaClass}>
      <div className={backButtonClass}>{backButton}</div>
      <div>{deleteButton}</div>
      <div className={saveButtonClass}>{buttons}</div>
    </div>
    <div className={marginBottom}></div>
  </div>
);

export default ShowClothesDetailsLayout;
