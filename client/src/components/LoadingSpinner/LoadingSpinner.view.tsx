import "../../components/LoadingSpinner/style.scss";
import { FC } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("components-loading-spinner");
const loadingSpinnerClass = scope.and("loadingSpinner");

interface Props {
  isLoading?: boolean;
}

export const LoadingSpinner: FC<Props> = ({
  children,
  isLoading,
  ...props
}) => (
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
