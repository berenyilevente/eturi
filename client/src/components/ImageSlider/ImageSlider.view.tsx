import "../../components/ImageSlider/style.scss";
import { FC, ReactNode, useCallback, useState } from "react";
import { CreateScopeCSS } from "../../components/utils";
import { Icon } from "../../components/Icon/Icon.view";

const scope = CreateScopeCSS("components-image-slider");
const imageContainerClass = scope.and("imageContainer");

interface Props {
  imageData: ReactNode[];
}

export const ImageSlider: FC<Props> = ({ imageData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slideLeft = () => {
    const nextImageIndex = currentImageIndex - 1;
    if (nextImageIndex < 0) {
      setCurrentImageIndex(imageData.length - 1);
    } else {
      setCurrentImageIndex(nextImageIndex);
    }
  };

  const slideRight = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imageData.length);
  };

  return (
    <div className={scope}>
      <Icon iconType="chevronLeftIcon" cursor={true} onClick={slideLeft} />
      {imageData[currentImageIndex]}
      <Icon iconType="chevronRightIcon" cursor={true} onClick={slideRight} />
    </div>
  );
};
