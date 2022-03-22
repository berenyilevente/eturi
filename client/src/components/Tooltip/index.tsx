import "../../components/Tooltip/style.scss";
import { FC } from "react";
import { CreateScopeCSS } from "../utils";
import ReactTooltip from "react-tooltip";

const scope = CreateScopeCSS("components-tooltip");
const backgroundColorClass = scope.and("backgroundColor");
const textColorClass = scope.and("textColor");

interface Props {
  children?: React.ReactNode;
  content?: string;
  place?: "top" | "right" | "left";
  type?: "dark" | "success" | "warning" | "error" | "info" | "light";
  textColor?: "white" | "blue" | "dark" | "lightBlue";
  backgroundColor?: "white" | "blue" | "dark" | "lightBlue";
  showTooltipDelay?: number;
  arrowColor?: string;
}

const Tooltip: FC<Props> = ({
  children,
  content,
  place,
  type,
  textColor,
  backgroundColor,
  showTooltipDelay,
  arrowColor,
}) => (
  <>
    <div data-tip={content}>{children}</div>
    <ReactTooltip
      place={place}
      backgroundColor={backgroundColorClass.and(backgroundColor)}
      textColor={textColorClass.and(textColor)}
      type={type}
      delayShow={showTooltipDelay}
      arrowColor={arrowColor}
    />
  </>
);
export default Tooltip;
