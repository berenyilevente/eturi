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

const useIntroScreen = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const introTitleText = t("intro.introHeader");
  const introButtonText = t("intro.introButton");
  const introHelperText = t("intro.introHelperText");

  const goToSellScreen = useCallback(() => history.push(pageURLS.SELL), [
    history,
  ]);
  const goToAboutScreen = useCallback(() => history.push(pageURLS.ABOUT), [
    history,
  ]);
  return {
    introTitleText,
    introButtonText,
    introHelperText,
    goToSellScreen,
    goToAboutScreen,
  };
};

const IntroScreen = () => {
  const {
    introTitleText,
    introButtonText,
    introHelperText,
    goToSellScreen,
    goToAboutScreen,
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
                onClick={() => goToSellScreen()}
                border="borderNone"
              >
                {introButtonText}
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
