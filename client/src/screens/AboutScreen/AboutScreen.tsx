import { FC } from "react";
import { useTranslation } from "react-i18next";

const useAboutScreen = () => {
  const { t } = useTranslation();

  return {};
};

const AboutScreen: FC = () => {
  const {} = useAboutScreen();

  return <>{"About page"}</>;
};
export default AboutScreen;
