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
  registerUserAction,
} from "../../redux/auth/auth.actions";
import { useNavigate } from "react-router";
import pageURLS from "../../resources/constants/pageURLS";
import { AppState } from "../../redux/store";
import LoadingSpinner from "../../components/LoadingSpinner";
import useForm from "../../hooks/useForm";
import { validateAuthInfo } from "../../resources/functions/validateAuthInfo";
import ErrorField from "../../components/ErrorField";
export interface IErrorFieldValues {
  firstName: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const AuthScreen: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpText = t("auth.signUp");
  const signUpTitleText = t("auth.signUpTitle");
  const firstNameText = t("auth.firstName");
  const lastNameText = t("auth.lastName");
  const emailText = t("auth.email");
  const passwordText = t("auth.password");
  const confirmPasswordText = t("auth.confirmPassword");
  const haveAnAccountText = t("auth.haveAnAccount");
  const signInText = t("auth.signIn");

  const { isAuthLoading } = useSelector((state: AppState) => state.auth);
  const { authValues, handleChange } = useForm();

  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const googleSuccess = useCallback(
    async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;
      try {
        dispatch(googleAuthAction({ result: result, token: token }));
        navigate(pageURLS.HOME);
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, navigate]
  );

  const googleFailure = useCallback(() => {
    console.log("Sign in unsuccessful...");
  }, []);

  const onSubmitSignUp = () => {
    !validateAuthInfo(authValues).firstName &&
    !validateAuthInfo(authValues).lastName &&
    !validateAuthInfo(authValues).email &&
    !validateAuthInfo(authValues).password &&
    !validateAuthInfo(authValues).confirmPassword
      ? dispatch(registerUserAction(authValues, navigate))
      : setShowErrorMessage(true);
  };

  const goToLoginScreen = useCallback(() => navigate(pageURLS.LOGIN), [
    navigate,
  ]);

  return (
    <LoadingSpinner>
      <AuthLayout
        icon={<Icon iconType="lockIcon" />}
        title={<Text textType="text-large-dark">{signUpTitleText}</Text>}
        firstNameInput={
          <>
            <Input
              placeholderText={firstNameText}
              onChange={handleChange}
              inputValue={authValues.firstName}
              inputType="text"
              name="firstName"
            />
            {showErrorMessage && (
              <ErrorField
                errorMessage={validateAuthInfo(authValues).firstName!}
              />
            )}
          </>
        }
        lastNameInput={
          <>
            <Input
              placeholderText={lastNameText}
              onChange={handleChange}
              inputValue={authValues.lastName}
              inputType="text"
              name="lastName"
            />
            {showErrorMessage && (
              <ErrorField
                errorMessage={validateAuthInfo(authValues).lastName!}
              />
            )}
          </>
        }
        email={
          <>
            <Input
              placeholderText={emailText}
              onChange={handleChange}
              inputValue={authValues.email}
              inputType="email"
              name="email"
              required
            />
            {showErrorMessage && (
              <ErrorField errorMessage={validateAuthInfo(authValues).email!} />
            )}
          </>
        }
        password={
          <>
            <Input
              placeholderText={passwordText}
              onChange={handleChange}
              inputValue={authValues.password}
              inputType="password"
              name="password"
            />
            {showErrorMessage && (
              <ErrorField
                errorMessage={validateAuthInfo(authValues).password!}
              />
            )}
          </>
        }
        confirmPassword={
          <>
            <Input
              placeholderText={confirmPasswordText}
              onChange={handleChange}
              inputValue={authValues.confirmPassword}
              inputType="password"
              name="confirmPassword"
            />
            {showErrorMessage && (
              <ErrorField
                errorMessage={validateAuthInfo(authValues).confirmPassword!}
              />
            )}
          </>
        }
        actionButton={
          <Button
            colorStyle="darkBlue"
            border="borderNone"
            buttonSize="large"
            onClick={() => onSubmitSignUp()}
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
