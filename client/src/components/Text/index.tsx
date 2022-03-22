import "../..//components/Text/style.scss";
import { FC } from "react";
import { cn, CreateScopeCSS } from "../utils";

const scope = CreateScopeCSS("components-text");
const coloursClass = scope.and("colours");
const underline = scope.and("underline");
const required = scope.and("required");
const bold = scope.and("bold");

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

export interface ITextProps {
  textType: TextTypes;
  isBold?: boolean;
  isRequired?: boolean;
  isUnderlined?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  color?: "dark" | "white" | "darkBlue" | "lightBlue" | "red" | "lightGrey";
  className?: string;
}

const Text: FC<ITextProps> = ({
  textType,
  children,
  isBold,
  isRequired,
  isUnderlined,
  textTransform,
  className,
  color,
}) => (
  <span
    className={cn(
      scope,
      scope.and(textType),
      isUnderlined ? underline : "",
      isRequired && required,
      isBold && bold,
      color && coloursClass.and(color),
      scope.and(textTransform),
      className
    )}
  >
    {children}
  </span>
);

export default Text;
