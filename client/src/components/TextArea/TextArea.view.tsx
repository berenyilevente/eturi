import "../../components/TextArea/style.scss";
import { FC } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("components-text-area");

interface Props {
  rows?: number;
  columns?: number;
  placeholderText: string;
  content?: string;
}

export const TextArea: FC<Props> = ({
  rows,
  columns,
  placeholderText,
  content,
}) => (
  <textarea
    rows={rows}
    cols={columns}
    placeholder={placeholderText}
    className={scope}
  >
    {content}
  </textarea>
);
