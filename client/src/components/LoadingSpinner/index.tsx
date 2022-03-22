import "../../components/LoadingSpinner/style.scss";
import { FC } from "react";
import { CreateScopeCSS } from "../utils";

const scope = CreateScopeCSS("components-loading-spinner");
const loadingSpinnerClass = scope.and("loadingSpinner");

interface Props {
  isLoading?: boolean;
}

const LoadingSpinner: FC<Props> = ({ children, isLoading, ...props }) => (
  <>
    {isLoading ? (
      <div className={scope}>
        <span className={loadingSpinnerClass} {...props} />
      </div>
    ) : (
      <span>{children}</span>
    )}
  </>
);
export default LoadingSpinner;
