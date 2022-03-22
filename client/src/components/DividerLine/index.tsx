import "../../components/DividerLine/style.scss";
import { FC } from "react";
import { CreateScopeCSS } from "../utils";

const scope = CreateScopeCSS("components-divider-line");

const DividerLine: FC = () => <div className={scope} />;

export default DividerLine;
