import "./style.scss";
import { FC } from "react";
import { cn, CreateScopeCSS } from "../utils";
import * as illustrationMap from "./illustrations";

const scope = CreateScopeCSS("components-illustrations");

interface Props {
  illustrationType: keyof typeof illustrationMap;
  className?: string;
}

const Illustrations: FC<Props> = ({ illustrationType, className }) => (
  <span className={cn(scope, className)}>
    {illustrationMap[illustrationType]}
  </span>
);

export default Illustrations;
