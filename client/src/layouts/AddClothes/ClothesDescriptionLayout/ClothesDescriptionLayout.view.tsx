import "../ClothesDescriptionLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../../components/utils";

const scope = CreateScopeCSS("layouts-clothes-description-layout");
const lineClass = scope.and("line");

interface Props {
  name: ReactNode;
  nameInput: ReactNode;
  description: ReactNode;
  descriptionTextArea: ReactNode;
  line: ReactNode;
}

export const ClothesDescriptionLayout: FC<Props> = ({
  name,
  nameInput,
  description,
  descriptionTextArea,
  line,
}) => (
  <div className={scope}>
    <div>{name}</div>
    <div>{nameInput}</div>
    <div className={lineClass}>{line}</div>
    <div>{description}</div>
    <div>{descriptionTextArea}</div>
  </div>
);
