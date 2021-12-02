import LoadingSpinner from "../../components/LoadingSpinner";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import LoginLayout from "../../layouts/LoginLayout";
import Icon from "../../components/Icon";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import { GoogleLogin } from "react-google-login";
import { setTriggerReload } from "../../redux/clothes/clothes.actions";
import { googleAuthAction, loginAction } from "../../redux/auth/auth.actions";
import pageURLS from "../../resources/constants/pageURLS";
import { AppState } from "@/redux/store";

const useLoginScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const loginText = t("auth.login");
  const emailText = t("auth.email");
  const passwordText = t("auth.password");
  const dontHaveAnAccountText = t("auth.dontHaveAnAccount");
  const signUpHereText = t("auth.signUpHere");

  const [emailContentLogin, setEmailContentLogin] = useState("");
  const [passwordContentLogin, setPasswordContentLogin] = useState("");

  const googleSuccess = useCallback(async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(googleAuthAction({ result: result, token: token }));
      history.push(pageURLS.HOME);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { isAuthLoading, isUserLoggedIn } = useSelector(
    (state: AppState) => state.auth
  );

  const googleFailure = useCallback(() => {
    console.log("Sign in unsuccessful...");
  }, []);

  const onSubmitLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        loginAction(
          {
            email: emailContentLogin,
            password: passwordContentLogin,
          },
          history
        )
      );
      dispatch(setTriggerReload({ triggerReload: true }));
    },
    [emailContentLogin, passwordContentLogin]
  );

  const goToAuthScreen = useCallback(() => {
    history.push(pageURLS.AUTH);
  }, [history]);

  return {
    loginText,
    emailText,
    passwordText,
    dontHaveAnAccountText,
    signUpHereText,
    emailContentLogin,
    setEmailContentLogin,
    passwordContentLogin,
    setPasswordContentLogin,
    onSubmitLogin,
    googleSuccess,
    googleFailure,
    goToAuthScreen,
    isAuthLoading,
  };
};

const LoginScreen: FC = () => {
  const {
    loginText,
    emailText,
    passwordText,
    dontHaveAnAccountText,
    signUpHereText,
    emailContentLogin,
    setEmailContentLogin,
    passwordContentLogin,
    setPasswordContentLogin,
    onSubmitLogin,
    googleSuccess,
    googleFailure,
    goToAuthScreen,
    isAuthLoading,
  } = useLoginScreen();

  return (
    <LoadingSpinner>
      <LoginLayout
        icon={<Icon iconType="lockIcon" />}
        title={<Text textType="text-large-dark">{loginText}</Text>}
        email={
          <Input
            placeholderText={emailText}
            onChange={setEmailContentLogin}
            inputValue={emailContentLogin}
          />
        }
        password={
          <Input
            placeholderText={passwordText}
            onChange={setPasswordContentLogin}
            inputValue={passwordContentLogin}
            inputType="password"
          />
        }
        actionButton={
          <Button
            colorStyle="darkBlue"
            border="borderNone"
            buttonSize="medium"
            onClick={onSubmitLogin}
            isLoading={isAuthLoading}
          >
            <Text textType="text-normal-white"> {loginText}</Text>
          </Button>
        }
        googleButton={
          <GoogleLogin
            clientId="212508933674-3ahsl2ma7cpb2ll40ulikadg2bf13qt9.apps.googleusercontent.com"
            render={(renderProps) => (
              <Icon
                iconType="googleIconColor"
                onClick={renderProps.onClick}
                cursor
              >
                {"google"}
              </Icon>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        }
        helperText={
          <>
            <Text textType="text-small-dark">{dontHaveAnAccountText}</Text>
            <Link
              textType="text-small-dark"
              color="darkBlue"
              onClick={() => goToAuthScreen()}
            >
              {signUpHereText}
            </Link>
          </>
        }
      />
    </LoadingSpinner>
  );
};
export default LoginScreen;
