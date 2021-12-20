import { Text } from "../../components/Text/Text.view";
import { Link } from "../../components/Link/Link.view";
import Card from "../../components/Card";
import IntroLayout from "../../layouts/IntroLayout";
import IntroCardLayout from "../../layouts/IntroCardLayout";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button.view";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import pageURLS from "../../resources/constants/pageURLS";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

const IntroScreen = () => {
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
