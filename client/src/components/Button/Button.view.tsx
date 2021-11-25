import "../../components/Button/style.scss";
import { FC, MouseEventHandler } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("components-button");
const roundedClass = scope.and("rounded");
const outline = scope.and("outline");
const borderNone = scope.and("borderNone");
const color = scope.and("color");
const cursorClass = scope.and("cursor");
const buttonSizeClass = scope.and("buttonSizes");
const textColorClass = scope.and("textColor");

interface IButtonProps {
  buttonSize?: "small" | "medium" | "normal" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  className?: string;
  transparent?: boolean;
  border?: boolean;
  noCursor?: boolean;
  colorStyle?: "darkBlue" | "lightBlue" | "red";
  buttonTextColor?: "dark" | "white";
}

export const Button: FC<IButtonProps> = ({
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
}) => (
  <button
    onClick={onClick}
    className={cn(
      scope,
      rounded ? roundedClass : "",
      className,
      buttonSize && buttonSizeClass.and(buttonSize),
      transparent ? outline : "",
      border ? "" : borderNone,
      colorStyle && color.and(colorStyle),
      noCursor && cursorClass,
      buttonTextColor && textColorClass.and(buttonTextColor)
    )}
  >
    {children}
  </button>
);
