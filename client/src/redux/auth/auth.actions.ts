import pageURLS from "../../resources/constants/pageURLS";
import { Dispatch } from "redux";
import * as api from "../../api";
import { ILoginResult, IUserRegistrationData } from "./auth.interfaces";
import {
  GOOGLE_AUTH_FAILURE,
  GOOGLE_AUTH_REQUEST,
  GOOGLE_AUTH_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  VERIFY_USER_FAILURE,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
} from "./auth.types";
import { NavigateFunction } from "react-router-dom";

export const googleAuthAction = (data: { result: any; token: any }) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: GOOGLE_AUTH_REQUEST,
  });
  try {
    dispatch({
      type: GOOGLE_AUTH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GOOGLE_AUTH_FAILURE,
      error,
    });
  }
};

export const loginAction = (
  loginData: ILoginResult,
  navigate: NavigateFunction
) => async (dispatch: Dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    const res = await api.login(loginData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    navigate(pageURLS.HOME);
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      error,
    });
  }
};

export const registerUserAction = (
  signUpData: IUserRegistrationData,
  navigate: NavigateFunction
) => async (dispatch: Dispatch) => {
  dispatch({
    type: SIGNUP_REQUEST,
  });
  try {
    const res = await api.register(signUpData);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    navigate(pageURLS.EMAIL_REDIRECT);
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      error,
    });
  }
};

export const logoutAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST,
  });
  try {
    localStorage.clear();
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILURE,
      error,
    });
  }
};

export const verifyUserAction = (confirmationCode?: string) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: VERIFY_USER_REQUEST,
  });
  try {
    await api.verifyUser(confirmationCode!);
    dispatch({
      type: VERIFY_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: VERIFY_USER_FAILURE,
      error,
    });
  }
};
