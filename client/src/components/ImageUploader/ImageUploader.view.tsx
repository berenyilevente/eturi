import "../../components/ImageUploader/style.scss";
import { FC, ReactNode, useCallback, useState } from "react";
import { CreateScopeCSS } from "../../components/utils";
import Text from "../../components/Text";
import { useTranslation } from "react-i18next";
import Icon from "../Icon";
import ImageSlider from "../ImageSlider";

const scope = CreateScopeCSS("components-image-uploader");
const imageAreaClass = scope.and("imageInputArea");
const imageContainerClass = scope.and("imageContainer");
const imageInputLabelClass = scope.and("imageInputLabel");

interface Props {
  onImage(data: any): void;
}

export const ImageUploader: FC<Props> = ({ onImage }) => {
  const { t } = useTranslation();

  const uploadLabelText = t("images.uploadImageLabel");

  //ToDo: fix any for base64
  const [baseImageContent, setBaseImageContent] = useState<any>([]);
  const [hasData, setHasData] = useState<boolean>(false);

  const onUploadImage = useCallback(
    async (image) => {
      const file = image.target.files[0];
      const base64 = await convertToBase64(file);
      let concatFiles = baseImageContent.concat(base64);
      setBaseImageContent(concatFiles);
      onImage(base64);
      setHasData(true);
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
        {hasData && (
          <ImageSlider
            imageData={baseImageContent.map((item: string) => (
              <img src={item} alt="" />
            ))}
          />
        )}
        <label className={imageInputLabelClass}>
          <Icon iconType="plusIcon" colorStyle="darkBlue" />
          <Text textType="text-normal-dark" color="darkBlue">
            {uploadLabelText}
          </Text>
          <input
            type="file"
            multiple
            onChange={(image) => onUploadImage(image)}
          />
        </label>
      </div>
    </div>
  );
};
