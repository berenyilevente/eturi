import "../../layouts/IntroLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-intro-layout");
const introImageClass = scope.and("introImage");
const introCardClass = scope.and("introCard");

interface Props {
  introCard: ReactNode;
}

const IntroLayout: FC<Props> = ({ introCard }) => (
  <div className={scope}>
    <div className={introImageClass}></div>
    <div className={cn(introCardClass)}>{introCard}</div>
  </div>
);

export default IntroLayout;
