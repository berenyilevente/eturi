import "../../components/ModalCarousel/style.scss";
import { FC, ReactNode, useState } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import Modal from "../../components/Modal";
import { Icon } from "../../components/Icon/Icon.view";

const scope = CreateScopeCSS("components-modal-carousel");
const contentClass = scope.and("content");
const navigationClass = scope.and("navigation");
const carouselImageContainer = scope.and("carouselContentContainer");

interface Props {
  carouselTitle: string[];
  carouselImages: ReactNode[];
  carouselContent: ReactNode[];
  showCarousel?: boolean;
  carouselWidth?: "narrow" | "normal" | "wide";
  closeCarousel?(): void;
  source?: string[];
}

export const ModalCarousel: FC<Props> = ({
  carouselTitle,
  carouselContent,
  showCarousel = true,
  carouselWidth,
  closeCarousel,
  carouselImages,
  source,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indexCounter, setIndexCounter] = useState(0);

  const slideLeft = () => {
    const nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      setCurrentIndex(carouselTitle.length - 1);
      setCurrentIndex(carouselImages.length - 1);
      setCurrentIndex(carouselContent.length - 1);
      setIndexCounter(+1);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const slideRight = () => {
    setCurrentIndex((currentIndex + 1) % carouselTitle.length);
    setCurrentIndex((currentIndex + 1) % carouselImages.length);
    setCurrentIndex((currentIndex + 1) % carouselContent.length);
    setIndexCounter(+1);
  };

  return (
    <div className={scope}>
      <Modal
        title={carouselTitle[currentIndex]}
        showModal={showCarousel}
        className={contentClass}
        modalWidth={carouselWidth}
        closeModal={closeCarousel}
      >
        <div className={carouselImageContainer}>
          {carouselImages[currentIndex]}
        </div>
        <div className="mt-3"> {carouselContent[currentIndex]}</div>
        <div className={navigationClass}>
          <Icon iconType="chevronLeftIcon" cursor={true} onClick={slideLeft} />
          <div className="d-flex">
            {currentIndex === 0 ? (
              <Icon iconType="dotFilled" cursor={true} onClick={slideLeft} />
            ) : (
              <Icon iconType="dot" cursor={true} onClick={slideLeft} />
            )}
            {currentIndex === 1 ? (
              <Icon iconType="dotFilled" cursor={true} onClick={slideLeft} />
            ) : (
              <Icon iconType="dot" cursor={true} onClick={slideLeft} />
            )}
            {currentIndex === 2 ? (
              <Icon iconType="dotFilled" cursor={true} onClick={slideLeft} />
            ) : (
              <Icon iconType="dot" cursor={true} onClick={slideLeft} />
            )}
            {currentIndex === 3 ? (
              <Icon iconType="dotFilled" cursor={true} onClick={slideLeft} />
            ) : (
              <Icon iconType="dot" cursor={true} onClick={slideLeft} />
            )}
            {currentIndex === 4 ? (
              <Icon iconType="dotFilled" cursor={true} onClick={slideLeft} />
            ) : (
              <Icon iconType="dot" cursor={true} onClick={slideLeft} />
            )}
          </div>
          <Icon
            iconType="chevronRightIcon"
            cursor={true}
            onClick={slideRight}
          />
        </div>
      </Modal>
    </div>
  );
};
