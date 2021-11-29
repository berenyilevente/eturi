import "../../components/LanguageSelector/style.scss";
import { FC, useCallback } from "react";
import { CreateScopeCSS } from "../../components/utils";
import i18n from "../../i18next";
import { useOutsideClickHandler } from "../../hooks/useOutsideClickHandler";
import { Link } from "../../components/Link/Link.view";

const scope = CreateScopeCSS("components-language-selector");
const selectorListClass = scope.and("selectorList");

interface Props {}

export const LanguageSelector: FC<Props> = () => {
  const languages = [
    {
      key: "EN",
    },
    {
      key: "HU",
    },
  ];
  const { setVisible, ref } = useOutsideClickHandler(false);

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
              textType="text-normal-dark"
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
