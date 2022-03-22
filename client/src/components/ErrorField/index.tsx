import "./style.scss";
import { FC } from "react";
import { CreateScopeCSS } from "../utils";
import { Text } from "components";

const scope = CreateScopeCSS("components-error-field");

interface Props {
  errorMessage: string;
}

const ErrorField: FC<Props> = ({ errorMessage }) => (
  <Text textType="text-small-dark" color="red" className={scope}>
    {errorMessage}
  </Text>
);
export default ErrorField;
