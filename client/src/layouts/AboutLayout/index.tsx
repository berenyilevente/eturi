import "../../layouts/AboutLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-about-layout");
const textFields = scope.and("textFields");
const revItem1 = scope.and("revItem1");
const revItem2 = scope.and("revItem2");
const icons = scope.and("icons");

interface Props {
  title?: ReactNode;
  registerText?: ReactNode;
  registerIcon?: ReactNode;
  addClothesText?: ReactNode;
  addClothesIcon?: ReactNode;
  sellOrBuyText?: ReactNode;
  sellOrBuyIcon?: ReactNode;
  takePhotosText?: ReactNode;
  takePhotosIcon?: ReactNode;
  addClothesButton?: ReactNode;
  searchClothesButton?: ReactNode;
}

const AboutLayout: FC<Props> = ({
  title,
  registerText,
  registerIcon,
  addClothesText,
  addClothesIcon,
  sellOrBuyText,
  sellOrBuyIcon,
  takePhotosText,
  takePhotosIcon,
}) => (
  <div>
    <div>{title}</div>
    <div className={scope}>
      <div className={textFields}>{registerText}</div>
      <div className={icons}>{registerIcon}</div>
      <div className={cn(textFields)}>{takePhotosText}</div>
      <div className={cn(icons, revItem1)}>{takePhotosIcon}</div>
      <div className={textFields}>{addClothesText}</div>
      <div className={icons}>{addClothesIcon}</div>
      <div className={textFields}>{sellOrBuyText}</div>
      <div className={cn(icons, revItem2)}>{sellOrBuyIcon}</div>
    </div>
  </div>
);

export default AboutLayout;
