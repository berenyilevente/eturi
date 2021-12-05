import "../../layouts/FilterClothesModalLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-filter-clothes-modal-layout");
const optionsArea = scope.and("optionsArea");
const priceRangeClass = scope.and("priceRangeClass");
const buttonArea = scope.and("buttonArea");
const colSpan = scope.and("colSpan");

interface Props {
  categoryDropDown?: ReactNode;
  clothingTypeDropDown?: ReactNode;
  brandsDropDown?: ReactNode;
  sizesDropDown?: ReactNode;
  conditionsDropDown?: ReactNode;
  coloursDropDown?: ReactNode;
  cancelButton?: ReactNode;
  filterButton?: ReactNode;
  priceRangeSlider?: ReactNode;
  priceRangeTitle?: ReactNode;
  priceFrom?: ReactNode;
  priceTo?: ReactNode;
}

export const FilterClothesModalLayout: FC<Props> = ({
  categoryDropDown,
  clothingTypeDropDown,
  brandsDropDown,
  sizesDropDown,
  conditionsDropDown,
  coloursDropDown,
  cancelButton,
  filterButton,
  priceRangeSlider,
  priceRangeTitle,
  priceFrom,
  priceTo,
}) => (
  <div className={scope}>
    <div className={optionsArea}>
      <div>{categoryDropDown}</div>
      <div>{clothingTypeDropDown}</div>
      <div>{brandsDropDown}</div>
      <div>{sizesDropDown}</div>
      <div>{conditionsDropDown}</div>
      <div>{coloursDropDown}</div>
    </div>
    <div className={priceRangeClass}>
      <div className={colSpan}>{priceRangeTitle}</div>
      <div>{priceFrom}</div>
      <div>{priceTo}</div>
    </div>

    <div className={buttonArea}>
      <div>{cancelButton}</div>
      <div>{filterButton}</div>
    </div>
  </div>
);