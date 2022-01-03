import "../../components/Icon/style.scss";
import { FC, MouseEventHandler } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import * as iconMap from "../../components/Icon/icons";

const scope = CreateScopeCSS("components-icon");
const background = scope.and("background");
const color = scope.and("colors");
const padding = scope.and("padding");
const border = scope.and("border");
const cursorPointerClass = scope.and("cursor");
const iconSpinnerClass = scope.and("iconSpinnerClass");

type ColorTypes =
  | "white"
  | "dark"
  | "red"
  | "darkBlue"
  | "black"
  | "brown"
  | "grey"
  | "beige"
  | "pink"
  | "purple"
  | "yellow"
  | "blue"
  | "green"
  | "orange"
  | "silver"
  | "gold"
  | "khaki"
  | "turquoise"
  | "cream"
  | "apricot"
  | "darkGreen"
  | "lightBlue";

interface Props {
  iconType: keyof typeof iconMap;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  outline?: boolean;
  className?: string;
  backgroundColorStyle?: "darkBlue" | "green" | "transparent" | "dark";
  colorStyle?: ColorTypes;
  cursor?: boolean;
  isLoading?: boolean;
}

export const Icon: FC<Props> = ({
  iconType,
  onClick,
  outline,
  className,
  backgroundColorStyle,
  colorStyle,
  cursor,
  isLoading,
  ...props
}) => (
  <span
    className={cn(
      scope,
      backgroundColorStyle && background.and(backgroundColorStyle),
      className,
      colorStyle && color.and(colorStyle),
      outline && padding,
      outline && border,
      outline && border.and(colorStyle),
      cursor && cursorPointerClass
    )}
    onClick={onClick}
    {...props}
  >
    {isLoading ? <div className={iconSpinnerClass} /> : iconMap[iconType]}
  </span>
);
