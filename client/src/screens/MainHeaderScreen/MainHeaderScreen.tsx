import { HeaderLayout } from "../../layouts/HeaderLayout/HeaderLayout.view";
import { SiteLogo } from "../../components/SiteLogo/SiteLogo.view";
import { Link } from "../../components/Link/Link.view";
import Icon from "../../components/Icon";
import Card from "../../components/Card";
import { useTranslation } from "react-i18next";
import { Tooltip } from "../../components/Tooltip/Tooltip.view";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";
import DividerLine from "../../components/DividerLine";
import NavigationMenu from "../../components/NavigationMenu";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/auth/auth.actions";
import { setTriggerReload } from "../../redux/clothes/clothes.actions";
import LoadingSpinner from "../../components/LoadingSpinner";
import { AppState } from "../../redux/store";
export interface INavigationMenuValues {
  id: number;
  value: ReactNode;
  icon: ReactNode;
  onClick(): void;
}

const useMainHeaderScreen = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
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

  const goToAuthScreen = useCallback(() => history.push(pageURLS.AUTH), [
    history,
  ]);

  const navigationMenuItems: INavigationMenuValues[] = [
    {
      id: 1,
      icon: <Icon iconType="homeIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{homeText}</Link>,
      onClick: () => goToHomeScreen(),
    },
    {
      id: 2,
      icon: <Icon iconType="plusIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{sellClothesText}</Link>,
      onClick: () => goToSellScreen(),
    },
    {
      id: 3,
      icon: <Icon iconType="searchIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{searchText}</Link>,
      onClick: () => goToSearchScreen(),
    },
    {
      id: 4,
      icon: <Icon iconType="informationIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{aboutText}</Link>,
      onClick: () => goToAboutScreen(),
    },
  ];

  const { isAuthLoading } = useSelector((state: AppState) => state.auth);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") || "null")
  );
  useEffect(() => {
    const token = user?.token;
    //JWT goes here later
    setUser(JSON.parse(localStorage.getItem("profile") || "null"));
  }, [location]);

  const logout = () => {
    dispatch(logoutAction());
    setUser(null);
    history.push(pageURLS.HOME);
    console.log(user);
  };

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
    navigationMenuItems,
    user,
    goToAuthScreen,
    logout,
    isAuthLoading,
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
    navigationMenuItems,
    user,
    goToAuthScreen,
    logout,
    isAuthLoading,
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
            {user ? (
              <>
                <Button
                  buttonSize="medium"
                  colorStyle="darkBlue"
                  border="borderNone"
                  transparent
                  buttonTextColor="dark"
                  onClick={logout}
                >
                  {"Logout"}
                </Button>
                <Button
                  buttonSize="medium"
                  colorStyle="darkBlue"
                  border="borderNone"
                >
                  {"Profile"}
                </Button>
                <NavigationMenu menuItems={navigationMenuItems} />
              </>
            ) : (
              <>
                <Button
                  buttonSize="medium"
                  colorStyle="darkBlue"
                  border="borderNone"
                  buttonTextColor="dark"
                  transparent
                >
                  {"Register"}
                </Button>
                <Button
                  buttonSize="medium"
                  colorStyle="darkBlue"
                  border="borderNone"
                  onClick={goToAuthScreen}
                >
                  {"Login"}
                </Button>
                <NavigationMenu menuItems={navigationMenuItems} />
              </>
            )}
          </>
        }
      />
    </Card>
  );
};

export default MainHeaderScreen;
