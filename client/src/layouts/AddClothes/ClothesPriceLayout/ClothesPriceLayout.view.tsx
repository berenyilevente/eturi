import "../ClothesPriceLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../../components/utils";

const scope = CreateScopeCSS("layouts-clothes-price-layout");
const example = scope.and("example");

interface Props {
  price: ReactNode;
  priceInput: ReactNode;
}

export const ClothesPriceLayout: FC<Props> = ({ price, priceInput }) => (
  <div className={scope}>
    <div>{price}</div>
    <div>{priceInput}</div>
  </div>
);
