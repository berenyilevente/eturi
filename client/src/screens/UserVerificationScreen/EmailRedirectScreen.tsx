import { FC } from "react";
import { useTranslation } from "react-i18next";
import { UserVerificationLayout } from "../../layouts/UserVerificationLayout/UserVerificationLayout.view";
import Text from "../../components/Text";
import Illustrations from "../../components/Illustrations";

const EmailRedirectScreen: FC = () => {
  const { t } = useTranslation();
  const confirmEmailTitle = t("auth.confirmEmailTitle");
  const confirmationText = t("auth.confirmationText");

  return (
    <UserVerificationLayout
      title={<Text textType="text-large-dark">{confirmEmailTitle}</Text>}
      text={<Text textType="text-small-dark">{confirmationText}</Text>}
      icon={<Illustrations illustrationType="emailSent" />}
    />
  );
};
export default EmailRedirectScreen;
