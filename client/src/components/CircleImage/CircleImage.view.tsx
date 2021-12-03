import "../../components/CircleImage/style.scss";
import { FC } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import Text from "../Text";

const scope = CreateScopeCSS("components-circle-image");
const noImageDataClass = scope.and("noImageData");
const sizeClass = scope.and("size");

type TextTypes =
  | "text-extra-small-dark"
  | "text-small-dark"
  | "text-medium-dark"
  | "text-normal-dark"
  | "text-large-dark"
  | "text-extra-large-dark"
  | "text-extra-small-white"
  | "text-small-white"
  | "text-medium-white"
  | "text-normal-white"
  | "text-large-white"
  | "text-extra-large-white"
  | "errorText";

interface Props {
  text?: string;
  imageSource?: string;
  alt?: string;
  size: "small" | "medium" | "large";
  textSize: TextTypes;
}

export const CircleImage: FC<Props> = ({
  text,
  imageSource,
  alt,
  size,
  textSize,
}) =>
  imageSource ? (
    <img
      className={cn(scope, size && sizeClass.and(size))}
      src={imageSource}
      alt={alt}
    />
  ) : (
    <div className={cn(scope, noImageDataClass, size && sizeClass.and(size))}>
      <Text textType={textSize}>{text?.split(" ").map((i) => i[0])}</Text>
    </div>
  );
