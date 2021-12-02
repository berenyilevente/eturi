import { Text } from "../../components/Text/Text.view";
import { Link } from "../../components/Link/Link.view";
import Icon from "../../components/Icon";
import Card from "../../components/Card";
import IntroLayout from "../../layouts/IntroLayout";
import IntroCardLayout from "../../layouts/IntroCardLayout";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button.view";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import pageURLS from "../../resources/constants/pageURLS";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

const useIntroScreen = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const { isUserLoggedIn } = useSelector((state: AppState) => state.auth);
  const introTitleText = t("intro.introHeader");
  const introButtonText = t("intro.introButton");
  const introHelperText = t("intro.introHelperText");

  const goToSellScreen = useCallback(() => history.push(pageURLS.SELL), [
    history,
  ]);
  const goToAboutScreen = useCallback(() => history.push(pageURLS.ABOUT), [
    history,
  ]);
  const goToAuthScreen = useCallback(() => history.push(pageURLS.AUTH), [
    history,
  ]);

  return {
    introTitleText,
    introButtonText,
    introHelperText,
    goToSellScreen,
    goToAboutScreen,
    goToAuthScreen,
    isUserLoggedIn,
  };
};

const IntroScreen = () => {
  const {
    introTitleText,
    introButtonText,
    introHelperText,
    goToSellScreen,
    goToAboutScreen,
    goToAuthScreen,
    isUserLoggedIn,
  } = useIntroScreen();
  return (
    <IntroLayout
      introCard={
        <Card
          backgroundColorStyle="white"
          rounded
          shadow
          paddingSize="paddingMedium"
        >
          <IntroCardLayout
            header={<Text textType="text-large-dark">{introTitleText}</Text>}
            button={
              <Button
                colorStyle="darkBlue"
                buttonSize="large"
                rounded
                onClick={() => {
                  isUserLoggedIn ? goToSellScreen() : goToAuthScreen();
                }}
                border="borderNone"
              >
                <Text textType="text-medium-white">{introButtonText}</Text>
              </Button>
            }
            link={
              <>
                <Link
                  textType="text-small-dark"
                  onClick={() => goToAboutScreen()}
                  color="lightBlue"
                >
                  {introHelperText}
                </Link>
              </>
            }
          />
        </Card>
      }
    />
  );
};

export default IntroScreen;
