import "../../components/Card/style.scss";
import { FC } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import { Text } from "../../components/Text/Text.view";

const scope = CreateScopeCSS("components-card");
const background = scope.and("backgroundColor");
const paddingSizeClass = scope.and("paddingSize");
const marginSizeClass = scope.and("marginSize");
const roundedClass = scope.and("borderRadius");
const shadowClass = scope.and("shadow");

interface Props {
  backgroundColorStyle: "white" | "blue" | "dark" | "lightBlue";
  paddingSize?:
    | "paddingExtraSmall"
    | "paddingSmall"
    | "paddingMedium"
    | "paddingLarge";
  marginSize?:
    | "marginExtraSmall"
    | "marginSmall"
    | "marginMedium"
    | "marginLarge";
  shadow?: boolean;
  rounded?: boolean;
  className?: string;
}

export const Card: FC<Props> = ({
  children,
  shadow,
  rounded,
  className,
  backgroundColorStyle,
  paddingSize,
  marginSize,
}) => (
  <div
    className={cn(
      scope,
      background.and(backgroundColorStyle),
      paddingSizeClass.and(paddingSize),
      marginSizeClass.and(marginSize),
      shadow ? shadowClass : "",
      rounded ? roundedClass : "",
      className
    )}
  >
    {children}
  </div>
);
