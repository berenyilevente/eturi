import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FooterLayout } from "../../layouts/FooterLayout/FooterLayout.view";
import { Link } from "../../components/Link/Link.view";
import Icon from "../../components/Icon";
import LanguageSelector from "../../components/LanguageSelector";
import DividerLine from "../../components/DividerLine";

const useFooterScreen = () => {
  const { t } = useTranslation();
  const homeText = t("footer.home");
  const contractText = t("footer.contract");
  const privacyText = t("footer.privacy");
  const imprintText = t("footer.imprint");
  return { homeText, contractText, privacyText, imprintText };
};

const FooterScreen: FC = () => {
  const {
    homeText,
    contractText,
    privacyText,
    imprintText,
  } = useFooterScreen();

  return (
    <>
      <DividerLine />
      <FooterLayout
        navigation={
          <>
            <Link textType="text-medium-dark">{homeText}</Link>
            <Link textType="text-medium-dark">{contractText}</Link>
            <Link textType="text-medium-dark">{privacyText}</Link>
            <Link textType="text-medium-dark">{imprintText}</Link>
          </>
        }
        socialMedia={
          <>
            <Icon iconType="facebookIcon" cursor></Icon>
            <Icon iconType="twitterIcon" cursor></Icon>
            <Icon iconType="instagramIcon" cursor></Icon>
            <Icon iconType="youtubeIcon" cursor></Icon>
            <Icon iconType="linkedinIcon" cursor></Icon>
          </>
        }
        languageSelector={<LanguageSelector />}
      />
    </>
  );
};

export default FooterScreen;
