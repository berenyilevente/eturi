import "./style.scss";
import { FC, useCallback, useState } from "react";
import { cn, CreateScopeCSS } from "../utils";

const scope = CreateScopeCSS("components-text-area");
const sizeClass = scope.and("size");

//ToDo add expand textarea option
interface Props {
  rows?: number;
  columns?: number;
  placeholderText: string;
  content?: string;
  onChange(value: string): void;
  size?: "small" | "medium" | "large" | "minContent";
}

const TextArea: FC<Props> = ({
  rows,
  columns,
  placeholderText,
  content,
  onChange,
  size,
}) => {
  const [, setTextAreaText] = useState<string>("");

  const onChangeTextAreaText = useCallback(
    (e) => {
      onChange(e);
      let currentValue: string = e.target.value;
      if (onChange) onChange(currentValue);
      setTextAreaText(currentValue);
    },
    [setTextAreaText, onChange]
  );
  return (
    <textarea
      rows={rows}
      cols={columns}
      placeholder={placeholderText}
      className={cn(scope, size && sizeClass.and(size))}
      onChange={onChangeTextAreaText}
      value={content}
    />
  );
};
export default TextArea;
