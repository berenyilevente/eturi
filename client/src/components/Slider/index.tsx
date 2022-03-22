import "../../components/Slider/style.scss";
import { FC, useCallback, useState } from "react";
import { cn, CreateScopeCSS } from "../utils";

const scope = CreateScopeCSS("components-slider");
const valuesClass = scope.and("values");
const sliderClass = scope.and("slider");
const secondarySliderClass = scope.and("secondarySlider");

interface Props {
  hasTwoValues?: boolean;
  colorStyle?: "white" | "dark" | "darkBlue";
  className?: string;
  minRange?: number;
  maxRange?: number;
}

const Slider: FC<Props> = ({
  hasTwoValues,
  colorStyle,
  className,
  minRange,
  maxRange,
}) => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [secondarySliderValue, setSecondarySliderValue] = useState<number>(0);

  const handleSliderChange = useCallback(
    (event) => {
      setSliderValue(event.target.value);
    },
    [setSliderValue]
  );
  const handleSecondarySliderChange = useCallback(
    (event) => {
      setSecondarySliderValue(event.target.value);
    },
    [setSecondarySliderValue]
  );

  return (
    <div className={cn(scope, className)}>
      <input
        type="range"
        min={minRange}
        max={maxRange}
        className={cn(sliderClass)}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      {hasTwoValues && (
        <input
          type="range"
          min={minRange}
          max={maxRange}
          className={cn(secondarySliderClass)}
          value={secondarySliderValue}
          onChange={handleSecondarySliderChange}
        />
      )}

      <div
        className={cn(
          hasTwoValues ? valuesClass : "d-flex justify-content-center"
        )}
      >
        <div>{sliderValue}</div>
        <div>{hasTwoValues ? secondarySliderValue : ""}</div>
      </div>
    </div>
  );
};

export default Slider;
