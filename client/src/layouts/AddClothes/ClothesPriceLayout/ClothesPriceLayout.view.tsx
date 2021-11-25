import "../ClothesPriceLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../../components/utils";

const scope = CreateScopeCSS("layouts-clothes-price-layout");

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
