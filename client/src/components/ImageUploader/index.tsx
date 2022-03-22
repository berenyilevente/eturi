import "../../components/ImageUploader/style.scss";
import { FC, useCallback, useState } from "react";
import { CreateScopeCSS } from "../utils";
import Text from "../../components/Text";
import Icon from "../Icon";

const scope = CreateScopeCSS("components-image-uploader");
const imageAreaClass = scope.and("imageInputArea");
const imageInputLabelClass = scope.and("imageInputLabel");
const textClass = scope.and("textClass");

interface Props {
  onImage(data: any): void;
  uploadText?: string;
}

const ImageUploader: FC<Props> = ({ onImage, uploadText }) => {
  //ToDo: fix any for base64
  const [baseImageContent, setBaseImageContent] = useState<any>([]);

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

  const onUploadImage = useCallback(
    async (image) => {
      const file = image.target.files[0];
      const base64 = await convertToBase64(file);
      let concatFiles = baseImageContent.concat(base64);
      setBaseImageContent(concatFiles);
      onImage(base64);
    },
    [onImage, baseImageContent, convertToBase64]
  );

  return (
    <div className={scope}>
      <div className={imageAreaClass}>
        <label className={imageInputLabelClass}>
          <Icon iconType="uploadIcon" colorStyle="darkBlue" />
          <Text
            textType="text-normal-dark"
            color="darkBlue"
            className={textClass}
          >
            {uploadText}
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

export default ImageUploader;
