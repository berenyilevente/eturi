import pageURLS from "../../resources/constants/pageURLS";
import { Dispatch } from "redux";
import * as api from "../../api";
import { IUserLoginData, IUserRegistrationData } from "./auth.interfaces";
import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./auth.types";

export const googleAuthAction = (data: { result: any; token: any }) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: AUTH_REQUEST,
  });
  try {
    dispatch({
      type: AUTH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      error,
    });
  }
};

export const loginAction = (loginData: IUserLoginData, history: any) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    const res = await api.login(loginData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    history.push(pageURLS.HOME);
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      error,
    });
  }
};

export const registerUserAction = (
  signUpData: IUserRegistrationData,
  history: any
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
    history.push(pageURLS.HOME);
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
