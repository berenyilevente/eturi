import AuthLayout from "../../layouts/AuthLayout";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../../components/Icon";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  googleAuthAction,
  loginAction,
  registerUserAction,
} from "../../redux/auth/auth.actions";
import { useHistory } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";
import { AppState } from "../../redux/store";
import LoadingSpinner from "../../components/LoadingSpinner";
import { setTriggerReload } from "../../redux/clothes/clothes.actions";

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

  const { isAuthLoading, isUserLoggedIn } = useSelector(
    (state: AppState) => state.auth
  );

  const [emailContent, setEmailContent] = useState<string>();
  const [passwordContent, setPasswordContent] = useState("");
  const [repeatPasswordContent, setRepeatPasswordContent] = useState("");
  const [lastNameContent, setLastNameContent] = useState("");
  const [firstNameContent, setFirstNameContent] = useState("");

  const validationPatterns = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^[\w]{8,20}$/,
  };

  const validateEmail = (content: string, regex: any) => {
    let isValid = true;
    if (regex.test(content)) {
      isValid = true;
    } else {
      alert("Invalid input");
      isValid = false;
    }
    return isValid;
  };

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

  const onSubmitSignUp = useCallback(() => {
    dispatch(
      registerUserAction(
        {
          firstName: firstNameContent,
          lastName: lastNameContent,
          email: emailContent!,
          password: passwordContent,
          confirmPassword: repeatPasswordContent,
        },
        history
      )
    );
    dispatch(setTriggerReload({ triggerReload: true }));
  }, [
    firstNameContent,
    lastNameContent,
    emailContent,
    passwordContent,
    repeatPasswordContent,
  ]);

  const goToLoginScreen = useCallback(() => history.push(pageURLS.LOGIN), [
    history,
  ]);
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
    signUpTitleText,
    dontHaveAnAccountText,
    signUpHereText,
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
    googleSuccess,
    googleFailure,
    onSubmitSignUp,
    isUserLoggedIn,
    isAuthLoading,
    goToLoginScreen,
    validationPatterns,
    validateEmail,
  };
};

const AuthScreen: FC = () => {
  const {
    signUpText,
    firstNameText,
    lastNameText,
    emailText,
    passwordText,
    repeatPasswordText,
    haveAnAccountText,
    signInText,
    signUpTitleText,
    dontHaveAnAccountText,
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
    googleSuccess,
    googleFailure,
    onSubmitSignUp,
    isAuthLoading,
    goToLoginScreen,
    validationPatterns,
    validateEmail,
  } = useAuthScreen();

  return (
    <LoadingSpinner>
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
            inputType="password"
          ></Input>
        }
        repeatPassword={
          <Input
            placeholderText={repeatPasswordText}
            onChange={setRepeatPasswordContent}
            inputValue={repeatPasswordContent}
            inputType="password"
          ></Input>
        }
        actionButton={
          <Button
            colorStyle="darkBlue"
            border="borderNone"
            buttonSize="large"
            onClick={() => {
              onSubmitSignUp();
            }}
            isLoading={isAuthLoading}
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
              onClick={() => goToLoginScreen()}
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
    </LoadingSpinner>
  );
};
export default AuthScreen;
