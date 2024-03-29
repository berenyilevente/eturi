import "../../components/Input/style.scss";
import {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  useCallback,
} from "react";
import { cn, CreateScopeCSS } from "../utils";
import Icon from "../Icon";
import * as iconMap from "../Icon/icons";

const scope = CreateScopeCSS("components-input");
const inputAreaClass = scope.and("inputArea");
const inputFieldClass = scope.and("inputField");

interface Props {
  inputValue?: string;
  placeholderText: string;
  inputType?: "text" | "number" | "password" | "email";
  onEnterKeyPressed?: KeyboardEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  errorTextValue?: string;
  hasIcon?: boolean;
  iconType?: keyof typeof iconMap;
  ref?: any;
  name: string;
}

const Input: FC<Props> = ({
  placeholderText,
  inputType,
  onChange,
  onEnterKeyPressed,
  inputValue,
  required,
  hasIcon,
  iconType,
  ref,
  name,
}) => {
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
          onChange={onChange}
          onKeyPress={onKeyPress}
          required={required}
          ref={ref}
          name={name}
        />
        {hasIcon && <Icon iconType={iconType!} />}
      </span>
    </div>
  );
};

export default Input;
