import "../../components/TextArea/style.scss";
import { FC } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import { Text } from "../../components/Text/Text.view";

const scope = CreateScopeCSS("components-text-area");
const example = scope.and("example");

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
