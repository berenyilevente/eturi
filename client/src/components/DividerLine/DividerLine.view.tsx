import "../../components/DividerLine/style.scss";
import { FC } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("components-divider-line");

export const DividerLine: FC = () => <div className={scope} />;
