import "../../components/Link/style.scss";
import { FC } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import { Text } from "../../components/Text/Text.view";

const scope = CreateScopeCSS("components-link");
const underlineClass = scope.and("underlineClass");

type TextTypes =
  | "text-extra-small-dark"
  | "text-small-dark"
  | "text-medium-dark"
  | "text-normal-dark"
  | "text-large-dark"
  | "text-extra-large-dark"
  | "text-extra-small-white"
  | "text-small-white"
  | "text-medium-white"
  | "text-normal-white"
  | "text-large-white"
  | "text-extra-large-white"
  | "errorText";

type Colors = "dark" | "white" | "darkBlue" | "lightBlue" | "red" | "lightGrey";

interface Props {
  onClick?(): void;
  onMouseOver?(): void;
  textType: TextTypes;
  color?: Colors;
  className?: string;
  textTransform?: "capitalize" | "lowercase" | "uppercase";
  focus?: boolean;
}

export const Link: FC<Props> = ({
  children,
  onClick,
  onMouseOver,
  textType,
  color,
  className,
  textTransform,
  focus,
}) => (
  <span
    className={cn(scope, className)}
    onClick={onClick}
    onMouseOver={onMouseOver}
  >
    <Text
      textType={textType}
      color={color}
      textTransform={textTransform}
      className={cn(focus && underlineClass)}
    >
      {children}
    </Text>
  </span>
);
