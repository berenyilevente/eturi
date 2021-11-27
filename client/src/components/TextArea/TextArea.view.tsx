import "../../components/TextArea/style.scss";
import { FC, useCallback, useState } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("components-text-area");

interface Props {
  rows?: number;
  columns?: number;
  placeholderText: string;
  content?: string;
  onChange(value: string): void;
}

export const TextArea: FC<Props> = ({
  rows,
  columns,
  placeholderText,
  content,
  onChange,
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
      className={scope}
      onChange={onChangeTextAreaText}
      value={content}
    />
  );
};
