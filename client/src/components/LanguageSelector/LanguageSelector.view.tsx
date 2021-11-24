import "../../components/LanguageSelector/style.scss";
import { FC, useCallback, useMemo, useState } from "react";
import { cn, CreateScopeCSS } from "../../components/utils";
import i18n from "../../i18next";
import { useOutsideClickHandler } from "../../hooks/useOutsideClickHandler";
import Icon from "../Icon";
import { Link } from "../../components/Link/Link.view";
import Tooltip from "../Tooltip";
import { useTranslation } from "react-i18next";

const scope = CreateScopeCSS("components-language-selector");
const selectorListClass = scope.and("selectorList");

interface Props {}

export const LanguageSelector: FC<Props> = () => {
  const { t } = useTranslation();

  const languages = [
    {
      key: "EN",
    },
    {
      key: "HU",
    },
  ];
  const { visible, setVisible, ref } = useOutsideClickHandler(false);

  const onLanguageSelectorClick = () => {
    !visible ? setVisible(true) : setVisible(false);
  };

  const language = languages.filter(
    (flag) => flag.key !== i18n.language.toUpperCase()
  );

  const onSelectClick = useCallback(
    (key) => {
      i18n.changeLanguage(key.toLowerCase());
      setVisible(false);
    },
    [setVisible]
  );

  return (
    <div className={scope} ref={ref}>
      <ul className={selectorListClass}>
        {language.map(({ key }) => (
          <li key={key.toString()}>
            <Link
              textType="text-medium-dark"
              onClick={() => onSelectClick(key)}
            >
              {key === "HU" ? key : key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
