import { IntroCardLayout, IntroLayout } from "layouts";
import { useTranslation } from "react-i18next";
import { Button, Text, Link, Card } from "components";
import { useNavigate } from "react-router-dom";
import { FC, useCallback } from "react";
import pageURLS from "../../resources/constants/pageURLS";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const IntroScreen: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isUserLoggedIn } = useSelector((state: AppState) => state.auth);
  const introTitleText = t("intro.introHeader");
  const introButtonText = t("intro.introButton");
  const introHelperText = t("intro.introHelperText");

  const goToSellScreen = useCallback(() => navigate(pageURLS.SELL), [navigate]);
  const goToAboutScreen = useCallback(() => navigate(pageURLS.ABOUT), [
    navigate,
  ]);
  const goToAuthScreen = useCallback(() => navigate(pageURLS.AUTH), [navigate]);
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
