import { CreateTemplate, meta } from "storybook";
import { ImageSlider as component } from "components";

import image1Source from "@/public/templateImages/image1.jpeg";
import image2Source from "@/public/templateImages/image2.jpeg";
import image3Source from "@/public/templateImages/image3.jpeg";
import image4Source from "@/public/templateImages/image4.jpeg";
import image5Source from "@/public/templateImages/image5.jpeg";
import { CreateScopeCSS } from "../utils";

const scope = CreateScopeCSS("components-image-slider");
const imageContainerClass = scope.and("imageContainer");

export default meta({
  title: "Components/ImageSlider",
  component,
});

const Template = CreateTemplate(component);

const image1 = {
  src: image1Source,
  alt: "my image",
};
const image2 = {
  src: image2Source,
  alt: "my image",
};
const image3 = {
  src: image3Source,
  alt: "my image",
};
const image4 = {
  src: image4Source,
  alt: "my image",
};
const image5 = {
  src: image5Source,
  alt: "my image",
};

export const ImageSlider = Template.bind({});
ImageSlider.args = {
  imageData: [
    <img src={image1.src} className={imageContainerClass} />,
    <img src={image2.src} className={imageContainerClass} />,
    <img src={image3.src} className={imageContainerClass} />,
    <img src={image4.src} className={imageContainerClass} />,
    <img src={image5.src} className={imageContainerClass} />,
  ],
};
