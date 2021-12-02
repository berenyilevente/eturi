import "../../components/Input/style.scss";
import { FC, KeyboardEventHandler, useCallback, useState } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import Icon from "../Icon";
import * as iconMap from "../../components/Icon/icons";

const scope = CreateScopeCSS("components-input");
const inputAreaClass = scope.and("inputArea");
const inputFieldClass = scope.and("inputField");
const iconClass = scope.and("iconClass");

interface Props {
  inputValue?: string;
  placeholderText: string;
  inputType?: "text" | "number" | "password";
  onEnterKeyPressed?: KeyboardEventHandler<HTMLInputElement>;
  onChange(value: string): void;
  required?: boolean;
  errorTextValue?: string;
  hasIcon?: boolean;
  iconType?: keyof typeof iconMap;
}

export const Input: FC<Props> = ({
  placeholderText,
  inputType,
  onChange,
  onEnterKeyPressed,
  inputValue,
  required,
  hasIcon,
  iconType,
}) => {
  const [, setInputText] = useState<string>("");

  const onChangeInputText = useCallback(
    (e) => {
      onChange(e);
      let currentValue: string = e.target.value;
      if (onChange) onChange(currentValue);
      setInputText(currentValue);
    },
    [setInputText, onChange]
  );

  const onKeyPress = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (e) => {
      if (e.key === "Enter") {
        onEnterKeyPressed && onEnterKeyPressed(e);
      }
    },
    [onEnterKeyPressed]
  );

  return (
    <div className={scope}>
      <span className={inputAreaClass}>
        <input
          placeholder={placeholderText}
          type={inputType}
          className={cn(inputFieldClass)}
          value={inputValue}
          onChange={onChangeInputText}
          onKeyPress={onKeyPress}
          required={required}
        />
        {hasIcon && <Icon iconType={iconType!} className={iconClass} />}
      </span>
    </div>
  );
};
