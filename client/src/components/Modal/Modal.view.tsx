import "../../components/Modal/style.scss";
import { FC, RefObject } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import { Card } from "../../components/Card/Card.view";
import { Text } from "../../components/Text/Text.view";
import { Icon } from "../../components/Icon/Icon.view";

const scope = CreateScopeCSS("components-modal");
const modalHeaderClass = scope.and("modalHeader");
const modalBackgroundClass = scope.and("modalBackground");
const modalWrapperClass = scope.and("modalWrapper");
const modalWidthClass = modalWrapperClass.and("modalWidth");

interface Props {
  title?: string | string[];
  modalWidth?: "narrow" | "normal" | "wide";
  showModal?: boolean;
  closeModal?(): void;
  className?: string;
  closeOnClickOutside?: RefObject<HTMLDivElement>;
}

export const Modal: FC<Props> = ({
  title,
  children,
  modalWidth,
  showModal = false,
  closeModal,
  className,
  closeOnClickOutside,
}) => {
  return (
    <div className={scope}>
      {showModal && (
        <div className={modalBackgroundClass}>
          <div
            className={cn(
              modalWrapperClass,
              className,
              modalWidth && modalWidthClass.and(modalWidth)
            )}
            ref={closeOnClickOutside}
          >
            <Card
              backgroundColorStyle="white"
              shadow
              paddingSize="paddingSmall"
              rounded
            >
              <div className={modalHeaderClass}>
                <Text textType="text-normal-dark">{title}</Text>
                <Icon
                  iconType="xIcon"
                  onClick={closeModal}
                  cursor={true}
                ></Icon>
              </div>
              {children}
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
