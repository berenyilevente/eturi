import { FC } from "react";
import { useTranslation } from "react-i18next";

const useSearchScreen = () => {
  const { t } = useTranslation();

  return {};
};

const SearchScreen: FC = () => {
  const {} = useSearchScreen();

  return <>{"Search"}</>;
};
export default SearchScreen;
