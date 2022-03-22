import { FC } from "react";
import { AboutLayout } from "layouts";
import { Text, Illustrations } from "components";
import { useTranslation } from "react-i18next";

const AboutScreen: FC = () => {
  const { t } = useTranslation();

  const title = t("aboutScreen.aboutTitle");
  const registerText = t("aboutScreen.register");
  const photosText = t("aboutScreen.photos");
  const addClothesText = t("aboutScreen.addClothes");
  const sellOrBuyText = t("aboutScreen.sellOrBuy");

  return (
    <AboutLayout
      title={<Text textType="text-extra-large-dark">{title}</Text>}
      registerText={<Text textType="text-normal-dark">{registerText}</Text>}
      registerIcon={<Illustrations illustrationType="register" />}
      addClothesText={<Text textType="text-normal-dark">{photosText}</Text>}
      addClothesIcon={<Illustrations illustrationType="addClothes" />}
      takePhotosText={<Text textType="text-normal-dark">{addClothesText}</Text>}
      takePhotosIcon={<Illustrations illustrationType="takePhotos" />}
      sellOrBuyText={<Text textType="text-normal-dark">{sellOrBuyText}</Text>}
      sellOrBuyIcon={<Illustrations illustrationType="sellOrBuy" />}
    />
  );
};
export default AboutScreen;
