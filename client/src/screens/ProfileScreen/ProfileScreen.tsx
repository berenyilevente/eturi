import { FC } from "react";
import { useTranslation } from "react-i18next";

const useProfileScreen = () => {
  const { t } = useTranslation();

  return {};
};

const ProfileScreen: FC = () => {
  const {} = useProfileScreen();

  return <>{"Profile"}</>;
};
export default ProfileScreen;
