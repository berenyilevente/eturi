import "../ClothesImageUploadLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../../components/utils";

const scope = CreateScopeCSS("layouts-clothes-image-upload-layout");
const previewImagesClass = scope.and("previewImages");
const flexClass = scope.and("flexClass");
interface Props {
  hintText: ReactNode;
  imageUploadArea: ReactNode;
  previewImages?: ReactNode;
}

const ClothesImageUploadLayout: FC<Props> = ({
  hintText,
  previewImages,
  imageUploadArea,
}) => (
  <div className={scope}>
    <div>{hintText}</div>
    <div className={flexClass}>
      <div className={previewImagesClass}>{previewImages}</div>
      <div>{imageUploadArea}</div>
    </div>
  </div>
);

export default ClothesImageUploadLayout;
