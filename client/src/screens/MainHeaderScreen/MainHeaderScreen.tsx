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
import decode from "jwt-decode";
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
  const loginText = t("auth.login");
  const signUpText = t("auth.signUpTitle");
  const logoutText = t("auth.logout");

  const { isAuthLoading, isUserLoggedIn } = useSelector(
    (state: AppState) => state.auth
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") || "null")
  );
  useEffect(() => {
    const token = user?.token;
    //decode the token to see when it is expiring
    if (token) {
      const decodedToken = decode<any>(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile") || "null"));
  }, [location]);

  const logout = () => {
    dispatch(logoutAction());
    setUser(null);
    history.push(pageURLS.HOME);
  };

  const goToHomeScreen = useCallback(() => history.push(pageURLS.HOME), [
    history,
  ]);

  const goToSellScreen = useCallback(() => history.push(pageURLS.SELL), [
    history,
  ]);
  const goToSearchScreen = useCallback(
    () => history.push(pageURLS.SEARCH_CLOTHES),
    [history]
  );
  const goToAboutScreen = useCallback(() => history.push(pageURLS.ABOUT), [
    history,
  ]);
  const goToProfileScreen = useCallback(() => history.push(pageURLS.PROFILE), [
    history,
  ]);

  const goToAuthScreen = useCallback(() => history.push(pageURLS.AUTH), [
    history,
  ]);
  const goToLoginScreen = useCallback(() => history.push(pageURLS.LOGIN), [
    history,
  ]);

  const navigationMenuItemsLoggedIn: INavigationMenuValues[] = [
    {
      id: 1,
      icon: <Icon iconType="homeIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{homeText}</Link>,
      onClick: () => goToHomeScreen(),
    },
    {
      id: 2,
      icon: <Icon iconType="personIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{profileText}</Link>,
      onClick: () => goToProfileScreen(),
    },
    {
      id: 3,
      icon: <Icon iconType="informationIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{aboutText}</Link>,
      onClick: () => goToAboutScreen(),
    },
    {
      id: 4,
      icon: <Icon iconType="logoutIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{logoutText}</Link>,
      onClick: () => logout(),
    },
  ];
  const navigationMenuItems: INavigationMenuValues[] = [
    {
      id: 1,
      icon: <Icon iconType="homeIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{homeText}</Link>,
      onClick: () => goToHomeScreen(),
    },
    {
      id: 2,
      icon: <Icon iconType="searchIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{searchText}</Link>,
      onClick: () => goToSearchScreen(),
    },
    {
      id: 3,
      icon: <Icon iconType="informationIcon" colorStyle="darkBlue" />,
      value: <Link textType="text-small-dark">{aboutText}</Link>,
      onClick: () => goToAboutScreen(),
    },
  ];

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
    navigationMenuItemsLoggedIn,
    user,
    goToAuthScreen,
    logout,
    isAuthLoading,
    dispatch,
    loginText,
    signUpText,
    logoutText,
    navigationMenuItems,
    isUserLoggedIn,
    goToLoginScreen,
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
    navigationMenuItemsLoggedIn,
    navigationMenuItems,
    user,
    goToAuthScreen,
    logout,
    isAuthLoading,
    dispatch,
    loginText,
    signUpText,
    logoutText,
    isUserLoggedIn,
    goToLoginScreen,
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
            {isUserLoggedIn ? (
              <>
                <Button
                  buttonSize="medium"
                  colorStyle="darkBlue"
                  border="borderNone"
                  transparent
                  buttonTextColor="dark"
                  onClick={goToSellScreen}
                >
                  {sellClothesText}
                </Button>
                <Button
                  buttonSize="medium"
                  colorStyle="darkBlue"
                  border="borderNone"
                  onClick={goToSearchScreen}
                  hasIconLeft
                  iconType="searchIcon"
                  iconColor="white"
                >
                  <Text textType="text-small-white">{searchText}</Text>
                </Button>
                <NavigationMenu menuItems={navigationMenuItemsLoggedIn} />
              </>
            ) : (
              <>
                <Button
                  buttonSize="medium"
                  colorStyle="darkBlue"
                  border="borderNone"
                  onClick={() => {
                    goToLoginScreen();
                  }}
                >
                  <Text textType="text-small-white"> {loginText}</Text>
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
