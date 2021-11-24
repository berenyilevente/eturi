import "../ClothesImageUploadLayout/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../../components/utils";

const scope = CreateScopeCSS("layouts-clothes-image-upload-layout");
const example = scope.and("example");

interface Props {
  hintText: ReactNode;
  imageUploadArea: ReactNode;
}

export const ClothesImageUploadLayout: FC<Props> = ({
  hintText,
  imageUploadArea,
}) => (
  <div className={scope}>
    <div>{hintText}</div>
    <div>{imageUploadArea}</div>
  </div>
);
