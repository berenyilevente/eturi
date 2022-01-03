import { AxiosError } from "axios";
import {
  IGoogleAuthResponse,
  ILoginResponseData,
  IUserAuthState,
  IUserRegistrationData,
} from "./auth.interfaces";

export const GOOGLE_AUTH_REQUEST = "GOOGLE_AUTH_REQUEST";
export const GOOGLE_AUTH_SUCCESS = "GOOGLE_AUTH_SUCCESS";
export const GOOGLE_AUTH_FAILURE = "GOOGLE_AUTH_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const USER_AUTH_STATE = "USER_AUTH_STATE";

//google auth types
export interface IAuthRequest {
  type: typeof GOOGLE_AUTH_REQUEST;
}
export interface IAuthSuccess {
  type: typeof GOOGLE_AUTH_SUCCESS;
  payload: IGoogleAuthResponse;
}
export interface IAuthFailure {
  type: typeof GOOGLE_AUTH_FAILURE;
  error: AxiosError | Error;
}

//logout types
export interface ILogoutRequest {
  type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}
export interface ILogoutFailure {
  type: typeof LOGOUT_FAILURE;
  error: AxiosError | Error;
}

//Login types
export interface ILoginRequest {
  type: typeof LOGIN_REQUEST;
  error: AxiosError | Error;
}
export interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: ILoginResponseData;
}
export interface ILoginFailure {
  type: typeof LOGIN_FAILURE;
  error: AxiosError | Error;
}

//SignUp types
export interface ISignUpRequest {
  type: typeof SIGNUP_REQUEST;
}
export interface ISignUpSuccess {
  type: typeof SIGNUP_SUCCESS;
  payload: IUserRegistrationData;
}
export interface ISignUpFailure {
  type: typeof SIGNUP_FAILURE;
  error: AxiosError | Error;
}

//current user state
export interface IUserState {
  type: typeof USER_AUTH_STATE;
  payload: IUserAuthState;
}

export type AuthActionTypes =
  | IAuthRequest
  | IAuthSuccess
  | IAuthFailure
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutFailure
  | ILoginRequest
  | ILoginSuccess
  | ILoginFailure
  | ISignUpRequest
  | ISignUpSuccess
  | ISignUpFailure
  | IUserState;
