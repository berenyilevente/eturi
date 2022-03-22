import "./style.scss";
import { FC, MouseEventHandler } from "react";
import { cn, CreateScopeCSS } from "../utils";
import { Icon, Text } from "components";

const scope = CreateScopeCSS("components-badge");
const colorClass = scope.and("colorClass");
const iconClass = scope.and("iconClass");

interface Props {
  content: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const Badge: FC<Props> = ({ content, onClick, className }) => (
  <div className={cn(scope, colorClass, className)}>
    <Text textType="text-small-white" textTransform="lowercase">
      {content}
    </Text>
    <Icon
      iconType="xIcon"
      onClick={onClick}
      className={cn(iconClass, "ml-2")}
      cursor
    />
  </div>
);

export default Badge;
