import { HeaderLayout } from "layouts";
import {
  Link,
  SiteLogo,
  Icon,
  Card,
  Text,
  Button,
  NavigationMenu,
} from "components";

import { useTranslation } from "react-i18next";
import { FC, ReactNode, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";

import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/auth/auth.actions";
import { AppState } from "../../redux/store";
import decode from "jwt-decode";
export interface INavigationMenuValues {
  id: number;
  value: ReactNode;
  icon: ReactNode;
  onClick(): void;
}

const MainHeaderScreen: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const homeText = t("header.home");
  const sellClothesText = t("header.sell");
  const searchText = t("header.search");
  const aboutText = t("header.about");
  const profileText = t("header.profile");
  const loginText = t("auth.login");
  const logoutText = t("auth.logout");

  const { isUserLoggedIn, auth } = useSelector((state: AppState) => state.auth);

  const logout = useCallback(() => {
    dispatch(logoutAction());
    navigate(pageURLS.HOME);
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = auth?.token;
    //decode the token to see when it is expiring
    if (token) {
      const decodedToken = decode<any>(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [auth, location, logout]);

  const goToHomeScreen = useCallback(() => navigate(pageURLS.HOME), [navigate]);

  const goToSellScreen = useCallback(() => navigate(pageURLS.SELL), [navigate]);
  const goToSearchScreen = useCallback(
    () => navigate(pageURLS.SEARCH_CLOTHES),
    [navigate]
  );
  const goToAboutScreen = useCallback(() => navigate(pageURLS.ABOUT), [
    navigate,
  ]);
  const goToProfileScreen = useCallback(() => navigate(pageURLS.PROFILE), [
    navigate,
  ]);

  const goToLoginScreen = useCallback(() => navigate(pageURLS.LOGIN), [
    navigate,
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
