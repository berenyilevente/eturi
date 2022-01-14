import "../../components/Illustrations/style.scss";
import { FC } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import * as illustrationMap from "../../components/Illustrations/illustrations";

const scope = CreateScopeCSS("components-illustrations");

interface Props {
  illustrationType: keyof typeof illustrationMap;
  className?: string;
}

export const Illustrations: FC<Props> = ({ illustrationType, className }) => (
  <span className={cn(scope, className)}>
    {illustrationMap[illustrationType]}
  </span>
);
