import "../../components/NavigationMenu/style.scss";
import { FC, ReactNode } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import { useOutsideClickHandler } from "../../hooks/useOutsideClickHandler";
import Icon from "../Icon";

const scope = CreateScopeCSS("components-navigation-menu");
const hamburgerMenuClass = scope.and("hamburgerMenu");
const menuItemsClass = scope.and("menuItemsClass");
const menuListItemClass = scope.and("menuListItemClass");
const linkClass = scope.and("linkClass");
const buttonClass = scope.and("buttonClass");

interface Props {
  menuItems: {
    id: number;
    value: ReactNode;
    icon: ReactNode;
    onClick(): void;
  }[];
}

export const NavigationMenu: FC<Props> = ({ menuItems }) => {
  const { visible, setVisible, ref } = useOutsideClickHandler(false);

  const onMenuClick = () => {
    !visible ? setVisible(true) : setVisible(false);
  };
  return (
    <div className={scope} ref={ref}>
      {visible && (
        <ul className={menuItemsClass}>
          {menuItems?.map((menuItem) => (
            <li key={menuItem.id}>
              <div
                className={buttonClass}
                onClick={() => {
                  onMenuClick();
                  menuItem.onClick();
                }}
              >
                <span className={menuListItemClass}>
                  {menuItem.icon}
                  <div className={linkClass}>{menuItem.value}</div>
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className={hamburgerMenuClass} onClick={onMenuClick}>
        {visible ? (
          <Icon iconType="xIcon" cursor />
        ) : (
          <Icon iconType="menuIcon" cursor />
        )}
      </div>
    </div>
  );
};
