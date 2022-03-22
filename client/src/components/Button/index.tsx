import "../../components/Button/style.scss";
import { FC, MouseEventHandler } from "react";
import { cn, CreateScopeCSS } from "../utils";
import Icon from "../Icon";
import * as iconMap from "../Icon/icons";

const scope = CreateScopeCSS("components-button");
const roundedClass = scope.and("rounded");
const outline = scope.and("outline");
const borderClass = scope.and("border");
const color = scope.and("color");
const cursorClass = scope.and("cursor");
const buttonSizeClass = scope.and("buttonSizes");
const textColorClass = scope.and("textColor");
const iconAlignStart = scope.and("iconAlignStart");
const iconAlignEnd = scope.and("iconAlignEnd");
const buttonSpinnerClass = scope.and("buttonSpinner");

type ColorTypes =
  | "white"
  | "dark"
  | "red"
  | "darkBlue"
  | "grey"
  | "green"
  | "orange"
  | "khaki"
  | "darkGreen"
  | "lightBlue";

interface IButtonProps {
  buttonSize?: "small" | "medium" | "normal" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  className?: string;
  transparent?: boolean;
  noCursor?: boolean;
  colorStyle?: ColorTypes;
  buttonTextColor?: "dark" | "white" | "currentColor" | "darkBlue";
  border?: "borderNone" | "borderDotted" | "borderSolid";
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  iconType?: keyof typeof iconMap;
  iconColor?: ColorTypes;
  isLoading?: boolean;
}

const Button: FC<IButtonProps> = ({
  buttonSize,
  onClick,
  rounded = true,
  className,
  transparent = false,
  border = false,
  colorStyle,
  children,
  noCursor,
  buttonTextColor,
  hasIconLeft,
  iconType,
  hasIconRight,
  isLoading,
  iconColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        scope,
        rounded ? roundedClass : "",
        className,
        buttonSize && buttonSizeClass.and(buttonSize),
        transparent ? outline : "",
        border && borderClass.and(border),
        colorStyle && color.and(colorStyle),
        noCursor && cursorClass,
        buttonTextColor && textColorClass.and(buttonTextColor)
      )}
    >
      {hasIconLeft && (
        <Icon
          iconType={iconType!}
          colorStyle={iconColor}
          className={iconAlignStart}
        />
      )}
      {isLoading ? <div className={buttonSpinnerClass} /> : children}
      {hasIconRight && <Icon iconType={iconType!} className={iconAlignEnd} />}
    </button>
  );
};

export default Button;
