import AuthLayout from "../../layouts/AuthLayout";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../../components/Icon";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Card from "../../components/Card";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  googleAuthAction,
  loginAction,
  registerUserAction,
  setUserAuthStateAction,
} from "../../redux/auth/auth.actions";
import { useHistory } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";
import { AppState } from "@/redux/store";

const useAuthScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const signUpText = t("auth.signUp");
  const signUpTitleText = t("auth.signUpTitle");
  const loginText = t("auth.login");
  const firstNameText = t("auth.firstName");
  const lastNameText = t("auth.lastName");
  const emailText = t("auth.email");
  const passwordText = t("auth.password");
  const repeatPasswordText = t("auth.repeatPassword");
  const haveAnAccountText = t("auth.haveAnAccount");
  const signInText = t("auth.signIn");
  const dontHaveAnAccountText = t("auth.dontHaveAnAccount");
  const signUpHereText = t("auth.signUpHere");

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const isUserLoggedIn = useSelector(
    (state: AppState) => state.auth.isUserLoggedIn
  );

  const [emailContent, setEmailContent] = useState("");
  const [emailContentLogin, setEmailContentLogin] = useState("");
  const [passwordContentLogin, setPasswordContentLogin] = useState("");
  const [passwordContent, setPasswordContent] = useState("");
  const [repeatPasswordContent, setRepeatPasswordContent] = useState("");
  const [lastNameContent, setLastNameContent] = useState("");
  const [firstNameContent, setFirstNameContent] = useState("");

  const switchToLogin = useCallback(() => {
    dispatch(setUserAuthStateAction({ isLogin: true }));
  }, [dispatch]);

  const switchToSignUp = useCallback(() => {
    dispatch(setUserAuthStateAction({ isLogin: false }));
  }, [dispatch]);

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

  const googleFailure = useCallback(() => {
    console.log("Sign in unsuccessful...");
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!isUserLoggedIn) {
        dispatch(
          registerUserAction(
            {
              firstName: firstNameContent,
              lastName: lastNameContent,
              email: emailContent,
              password: passwordContent,
              repeatPassword: repeatPasswordContent,
            },
            history
          )
        );
      } else {
        dispatch(
          loginAction(
            {
              email: emailContentLogin,
              password: passwordContentLogin,
            },
            history
          )
        );
      }
    },
    [
      firstNameContent,
      lastNameContent,
      emailContent,
      passwordContent,
      repeatPasswordContent,
      emailContentLogin,
      passwordContentLogin,
    ]
  );

  return {
    signUpText,
    loginText,
    firstNameText,
    lastNameText,
    emailText,
    passwordText,
    repeatPasswordText,
    haveAnAccountText,
    signInText,
    isLogin,
    setIsLogin,
    signUpTitleText,
    dontHaveAnAccountText,
    signUpHereText,
    switchToLogin,
    emailContent,
    setEmailContent,
    passwordContent,
    setPasswordContent,
    lastNameContent,
    setLastNameContent,
    firstNameContent,
    setFirstNameContent,
    repeatPasswordContent,
    setRepeatPasswordContent,
    passwordContentLogin,
    setPasswordContentLogin,
    emailContentLogin,
    setEmailContentLogin,
    googleSuccess,
    googleFailure,
    onSubmit,
    isUserLoggedIn,
    switchToSignUp,
  };
};

const AuthScreen: FC = () => {
  const {
    signUpText,
    loginText,
    firstNameText,
    lastNameText,
    emailText,
    passwordText,
    repeatPasswordText,
    haveAnAccountText,
    signInText,
    isLogin,
    setIsLogin,
    signUpTitleText,
    dontHaveAnAccountText,
    signUpHereText,
    switchToLogin,
    emailContent,
    setEmailContent,
    passwordContent,
    setPasswordContent,
    lastNameContent,
    setLastNameContent,
    firstNameContent,
    setFirstNameContent,
    repeatPasswordContent,
    setRepeatPasswordContent,
    passwordContentLogin,
    setPasswordContentLogin,
    emailContentLogin,
    setEmailContentLogin,
    googleSuccess,
    googleFailure,
    onSubmit,
    isUserLoggedIn,
    switchToSignUp,
  } = useAuthScreen();

  return (
    <Card backgroundColorStyle="white" shadow width="small">
      {isUserLoggedIn ? (
        <AuthLayout
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
            />
          }
          actionButton={
            <Button
              colorStyle="darkBlue"
              border="borderNone"
              buttonSize="medium"
              onClick={onSubmit}
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
                onClick={() => switchToSignUp()}
              >
                {signUpHereText}
              </Link>
            </>
          }
        />
      ) : (
        <AuthLayout
          icon={<Icon iconType="lockIcon" />}
          title={<Text textType="text-large-dark">{signUpTitleText}</Text>}
          firstNameInput={
            <Input
              placeholderText={firstNameText}
              onChange={setFirstNameContent}
              inputValue={firstNameContent}
            ></Input>
          }
          lastNameInput={
            <Input
              placeholderText={lastNameText}
              onChange={setLastNameContent}
              inputValue={lastNameContent}
            ></Input>
          }
          email={
            <Input
              placeholderText={emailText}
              onChange={setEmailContent}
              inputValue={emailContent}
            ></Input>
          }
          password={
            <Input
              placeholderText={passwordText}
              onChange={setPasswordContent}
              inputValue={passwordContent}
            ></Input>
          }
          repeatPassword={
            <Input
              placeholderText={repeatPasswordText}
              onChange={setRepeatPasswordContent}
              inputValue={repeatPasswordContent}
            ></Input>
          }
          actionButton={
            <Button
              colorStyle="darkBlue"
              border="borderNone"
              buttonSize="large"
              onClick={onSubmit}
            >
              <Text textType="text-normal-white"> {signUpText}</Text>
            </Button>
          }
          helperText={
            <>
              <Text textType="text-small-dark">{haveAnAccountText}</Text>
              <Link
                textType="text-small-dark"
                color="darkBlue"
                onClick={() => switchToLogin()}
              >
                {signInText}
              </Link>
            </>
          }
          googleButton={
            <>
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
            </>
          }
        />
      )}
    </Card>
  );
};
export default AuthScreen;
