import { HeaderLayout } from "../../layouts/HeaderLayout/HeaderLayout.view";
import { SiteLogo } from "../../components/SiteLogo/SiteLogo.view";
import { Link } from "../../components/Link/Link.view";
import Icon from "../../components/Icon";
import Card from "../../components/Card";
import { useTranslation } from "react-i18next";
import { Tooltip } from "../../components/Tooltip/Tooltip.view";
import { useCallback } from "react";
import { useHistory } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";

const useMainHeaderScreen = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const homeText = t("header.home");
  const sellClothesText = t("header.sell");
  const searchText = t("header.search");
  const aboutText = t("header.about");
  const profileText = t("header.profile");

  const goToHomeScreen = useCallback(() => history.push(pageURLS.HOME), [
    history,
  ]);

  const goToSellScreen = useCallback(() => history.push(pageURLS.SELL), [
    history,
  ]);
  const goToSearchScreen = useCallback(() => history.push(pageURLS.SEARCH), [
    history,
  ]);
  const goToAboutScreen = useCallback(() => history.push(pageURLS.ABOUT), [
    history,
  ]);
  const goToProfileScreen = useCallback(() => history.push(pageURLS.PROFILE), [
    history,
  ]);

  return {
    homeText,
    sellClothesText,
    searchText,
    aboutText,
    profileText,
    goToSellScreen,
    goToSearchScreen,
    goToHomeScreen,
    goToAboutScreen,
    goToProfileScreen,
  };
};

const MainHeaderScreen = () => {
  const {
    homeText,
    sellClothesText,
    searchText,
    aboutText,
    profileText,
    goToSellScreen,
    goToSearchScreen,
    goToHomeScreen,
    goToAboutScreen,
    goToProfileScreen,
  } = useMainHeaderScreen();
  return (
    <Card backgroundColorStyle="white" rounded>
      <HeaderLayout
        logo={
          <SiteLogo
            logoType="siteLogo"
            cursor
            colorStyle="darkBlue"
            onClick={() => goToHomeScreen()}
          />
        }
        navItems={
          <>
            <Link textType="text-normal-dark" onClick={() => goToHomeScreen()}>
              {homeText}
            </Link>
            <Link textType="text-normal-dark" onClick={() => goToSellScreen()}>
              {sellClothesText}
            </Link>
            <Link
              textType="text-normal-dark"
              onClick={() => goToSearchScreen()}
            >
              {searchText}
            </Link>
            <Link textType="text-normal-dark" onClick={() => goToAboutScreen()}>
              {aboutText}
            </Link>
            <Tooltip
              content={profileText}
              place="top"
              type="light"
              showTooltipDelay={0}
              arrowColor="transparent"
            >
              <Icon iconType="personIcon" cursor />
            </Tooltip>
          </>
        }
      />
    </Card>
  );
};

export default MainHeaderScreen;
