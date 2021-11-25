import "../../layouts/HomeContentLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-home-content-layout");
const containerClass = scope.and("container");

interface Props {
  contentCard?: ReactNode;
}

export const HomeContentLayout: FC<Props> = ({ contentCard }) => (
  <div className={scope}>
    <div className={containerClass}>{contentCard}</div>
  </div>
);
