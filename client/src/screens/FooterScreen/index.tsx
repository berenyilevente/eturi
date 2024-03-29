import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FooterLayout } from "layouts";
import { Link, Icon, DividerLine } from "components";

const FooterScreen: FC = () => {
  const { t } = useTranslation();
  const homeText = t("footer.home");
  const contractText = t("footer.contract");
  const privacyText = t("footer.privacy");
  const imprintText = t("footer.imprint");

  return (
    <>
      <DividerLine />
      <FooterLayout
        navigation={
          <>
            <Link textType="text-normal-dark">{homeText}</Link>
            <Link textType="text-normal-dark">{contractText}</Link>
            <Link textType="text-normal-dark">{privacyText}</Link>
            <Link textType="text-normal-dark">{imprintText}</Link>
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
      />
    </>
  );
};

export default FooterScreen;
