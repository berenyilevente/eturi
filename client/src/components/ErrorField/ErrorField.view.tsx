import "../../components/ErrorField/style.scss";
import { FC } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import Text from "../Text";

const scope = CreateScopeCSS("components-error-field");

interface Props {
  errorMessage: string;
}

export const ErrorField: FC<Props> = ({ errorMessage }) => (
  <Text textType="text-small-dark" color="red" className={scope}>
    {errorMessage}
  </Text>
);
