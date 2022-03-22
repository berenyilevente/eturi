import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { UserVerificationLayout } from "layouts";
import { Text, Illustrations } from "components";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { verifyUserAction } from "../../redux/auth/auth.actions";
import pageURLS from "../../resources/constants/pageURLS";

const UserVerificationScreen: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verificationSuccessful = t("auth.verificationSuccessful");
  const redirect = t("auth.redirect");
  const { confirmationCode = "" } = useParams();

  useEffect(() => {
    dispatch(verifyUserAction(confirmationCode));
    setTimeout(() => navigate(pageURLS.LOGIN), 5000);
  }, [dispatch, navigate, confirmationCode]);

  return (
    <UserVerificationLayout
      title={<Text textType="text-large-dark">{verificationSuccessful}</Text>}
      text={<Text textType="text-small-dark">{redirect}</Text>}
      icon={<Illustrations illustrationType="confirmEmail" />}
    />
  );
};
export default UserVerificationScreen;
