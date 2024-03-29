import "../../components/DropdownMenu/style.scss";
import { FC, ReactNode, useCallback, useState } from "react";
import { cn, CreateScopeCSS } from "../utils";
import { useOutsideClickHandler } from "hooks";
import { Icon, Text } from "components";

const scope = CreateScopeCSS("components-dropdown-menu");
const dropdownHeader = scope.and("dropdownHeader");
const dropdownHeaderTitle = scope.and("dropdownHeaderTitle");
const dropdownList = scope.and("dropdownList");
const displayNone = scope.and("displayNone");
const listItemsClass = scope.and("listItems");

interface IDropdownItem {
  id: number;
  value: string;
  description?: string;
  icon?: ReactNode;
}

interface Props {
  content?: string;
  items: {
    id: number;
    value: string;
    description?: string;
    icon?: ReactNode;
  }[];
  multiselect?: boolean;
  addValueToDropdown?: boolean;
  hasDescriptionRow?: boolean;
  onSelectItem(item: IDropdownItem): void;
  hasIcon?: boolean;
  maxSelection?: number;
  placeholder?: string;
}
const DropdownMenu: FC<Props> = ({
  content,
  items,
  multiselect = false,
  hasDescriptionRow,
  onSelectItem,
  placeholder,
}) => {
  const [selection, setSelection] = useState<{ id?: number; value?: string }[]>(
    [{}]
  );
  const { visible, setVisible, ref } = useOutsideClickHandler(false);

  const onSelectClick = (item: IDropdownItem) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiselect) {
        setSelection([item]);
        setVisible(false);
      } else if (multiselect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
      content = undefined;
    }
    onSelectItem(item);
  };

  const isItemInSelection = useCallback(
    (item) => {
      return selection.find((current) => current.id === item.id) ? true : false;
    },
    [selection]
  );

  const onDropdownClick = () => {
    !visible ? setVisible(true) : setVisible(false);
  };

  //look up ref!
  return (
    <div className={scope} ref={ref}>
      <div tabIndex={0} className={dropdownHeader} onClick={onDropdownClick}>
        <div className={dropdownHeaderTitle}>{placeholder || content}</div>
        <div>
          {visible ? (
            <Icon iconType="xIcon" />
          ) : (
            <Icon iconType="chevronDownIcon" />
          )}
        </div>
      </div>
      {visible && (
        <ul className={dropdownList}>
          {items?.map((item) => (
            <li key={item.id}>
              <button onClick={() => onSelectClick(item)}>
                <span className={listItemsClass}>
                  {item.icon}
                  {item.value}
                  {hasDescriptionRow && (
                    <Text textType="text-small-dark" className="w-100">
                      {item.description}
                    </Text>
                  )}
                </span>
                <span>
                  <Icon
                    iconType="circle"
                    className={cn(isItemInSelection(item) ? displayNone : "")}
                  />
                  {isItemInSelection(item) && (
                    <Icon
                      iconType="checkIcon"
                      outline={false}
                      colorStyle="darkBlue"
                    />
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
