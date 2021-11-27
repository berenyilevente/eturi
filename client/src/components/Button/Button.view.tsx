import "../../components/Button/style.scss";
import { FC, MouseEventHandler, useState } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import Icon from "../Icon";
import * as iconMap from "../../components/Icon/icons";

const scope = CreateScopeCSS("components-button");
const roundedClass = scope.and("rounded");
const outline = scope.and("outline");
const borderClass = scope.and("border");
const color = scope.and("color");
const cursorClass = scope.and("cursor");
const buttonSizeClass = scope.and("buttonSizes");
const textColorClass = scope.and("textColor");
const buttonSpinnerClass = scope.and("buttonSpinner");

interface IButtonProps {
  buttonSize?: "small" | "medium" | "normal" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  className?: string;
  transparent?: boolean;
  noCursor?: boolean;
  colorStyle?: "darkBlue" | "lightBlue" | "red";
  buttonTextColor?: "dark" | "white" | "currentColor";
  border?: "borderNone" | "borderDotted" | "borderSolid";
  hasIcon?: boolean;
  iconType?: keyof typeof iconMap;
  isLoading?: boolean;
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
  hasIcon,
  iconType,
  isLoading,
}) => {
  const [animationFinished, setAnimationFinished] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("");

  const startStopAnimation = () => {
    setAnimationClass(buttonSpinnerClass);
  };

  const onAnimationStart = () => {
    setAnimationFinished(false);
  };
  const onAnimationEnd = () => {
    setAnimationFinished(true);
  };

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
      {hasIcon && <Icon iconType={iconType!} />}

      {isLoading ? (
        <span
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
          className={animationClass}
        />
      ) : (
        children
      )}
    </button>
  );
};
