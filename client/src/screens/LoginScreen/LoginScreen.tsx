import LoadingSpinner from "../../components/LoadingSpinner";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
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
import { AppState } from "../../redux/store";
import useForm from "../../hooks/useForm";
import ErrorField from "../../components/ErrorField";

const LoginScreen: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginText = t("auth.login");
  const emailText = t("auth.email");
  const passwordText = t("auth.password");
  const dontHaveAnAccountText = t("auth.dontHaveAnAccount");
  const signUpHereText = t("auth.signUpHere");

  const { loginValues, handleChange } = useForm();

  const [
    noUserFoundErrorMessage,
    setNoUserFoundErrorMessage,
  ] = useState<string>();

  //in here we get access to a full response
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

  const { isAuthLoading, errorMessage } = useSelector(
    (state: AppState) => state.auth
  );

  const googleFailure = useCallback(() => {
    console.log("Sign in unsuccessful...");
  }, []);

  useEffect(() => {}, [setNoUserFoundErrorMessage]);

  const onSubmitLogin = useCallback(
    (e) => {
      e.preventDefault();
      errorMessage
        ? setNoUserFoundErrorMessage("Email or password invalid")
        : setNoUserFoundErrorMessage("");
      dispatch(loginAction(loginValues, navigate));
      dispatch(setTriggerReload({ triggerReload: true }));
    },
    [loginValues, errorMessage, dispatch, navigate]
  );

  const goToAuthScreen = useCallback(() => {
    navigate(pageURLS.AUTH);
  }, [navigate]);

  return (
    <LoadingSpinner>
      <LoginLayout
        icon={<Icon iconType="lockIcon" />}
        title={<Text textType="text-large-dark">{loginText}</Text>}
        email={
          <Input
            placeholderText={emailText}
            onChange={handleChange}
            inputValue={loginValues.email}
            name="email"
          />
        }
        password={
          <>
            <Input
              placeholderText={passwordText}
              onChange={handleChange}
              inputValue={loginValues.password}
              inputType="password"
              name="password"
            />
            {noUserFoundErrorMessage && (
              <ErrorField errorMessage={noUserFoundErrorMessage!} />
            )}
          </>
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
