import "../../components/SiteLogo/style.scss";
import { FC, MouseEventHandler } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import * as logoMap from "../../components/SiteLogo/Logo";

const scope = CreateScopeCSS("components-site-logo");
const background = scope.and("background");
const cursorPointerClass = scope.and("cursor");
const colorStyleClass = scope.and("colorStyles");

interface Props {
  logoType: keyof typeof logoMap;
  backgroundColorStyle?: "transparent";
  onClick?: MouseEventHandler<HTMLDivElement>;
  cursor?: boolean;
  colorStyle?: "dark" | "darkBlue";
}

export const SiteLogo: FC<Props> = ({
  logoType,
  backgroundColorStyle,
  onClick,
  cursor,
  colorStyle,
}) => (
  <div
    className={cn(
      scope,
      backgroundColorStyle && background.and(backgroundColorStyle),
      cursor && cursorPointerClass,
      colorStyle && colorStyleClass.and(colorStyle)
    )}
    onClick={onClick}
  >
    {logoMap[logoType]}
  </div>
);
