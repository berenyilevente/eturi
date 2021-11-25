import "../../components/ImageUploader/style.scss";
import { FC, useCallback, useState } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("components-image-uploader");

interface Props {
  onImage(data: any): void;
  baseImage?: any;
}

export const ImageUploader: FC<Props> = ({ onImage, baseImage }) => {
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
      <input type="file" onChange={(image) => onUploadImage(image)} />
      <img src={baseImageContent} alt="" className="w-25" />
    </div>
  );
};
