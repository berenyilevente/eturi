import "../../components/ImageUploader/style.scss";
import { FC, useCallback, useState } from "react";
import { CreateScopeCSS } from "../../components/utils";
import Text from "../../components/Text";
import { useTranslation } from "react-i18next";
import Icon from "../Icon";

const scope = CreateScopeCSS("components-image-uploader");
const imageAreaClass = scope.and("imageInputArea");
const imageContainerClass = scope.and("imageContainer");
const imageInputLabelClass = scope.and("imageInputLabel");

interface Props {
  onImage(data: any): void;
  baseImage?: any;
}

export const ImageUploader: FC<Props> = ({ onImage }) => {
  const { t } = useTranslation();

  const uploadLabelText = t("images.uploadImageLabel");

  const [baseImageContent, setBaseImageContent] = useState<any>();

  const onUploadImage = useCallback(
    async (image) => {
      //console.log(image.target.files);
      const file = image.target.files[0];
      const base64 = await convertToBase64(file);
      setBaseImageContent(base64);
      onImage(base64);
    },
    [onImage]
  );

  const convertToBase64 = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) return;
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }, []);

  return (
    <div className={scope}>
      <div className={imageAreaClass}>
       {baseImageContent && <img src={baseImageContent} alt="" />}
        <label className={imageInputLabelClass}>
          <Icon iconType="plusIcon" colorStyle="darkBlue" />
          <Text textType="text-medium-dark" color="darkBlue">
            {uploadLabelText}
          </Text>
          <input type="file" onChange={(image) => onUploadImage(image)} />
        </label>
      </div>
    </div>
  );
};
