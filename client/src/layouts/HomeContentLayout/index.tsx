import "../../layouts/HomeContentLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-home-content-layout");
const containerClass = scope.and("container");
const paginationClass = scope.and("paginationClass");

interface Props {
  contentCard?: ReactNode;
  paginationComponent?: ReactNode;
}

export const HomeContentLayout: FC<Props> = ({
  contentCard,
  paginationComponent,
}) => (
  <div className={scope}>
    <div className={containerClass}>{contentCard}</div>
    <div className={paginationClass}>{paginationComponent}</div>
  </div>
);
export default HomeContentLayout;
