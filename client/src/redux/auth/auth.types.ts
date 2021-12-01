import { AxiosError } from "axios";
import { IAuthResponseData } from "./auth.interfaces";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export interface IAuthRequest {
  type: typeof AUTH_REQUEST;
}

export interface IAuthSuccess {
  type: typeof AUTH_SUCCESS;
  payload: IAuthResponseData[];
}

export interface IAuthFailure {
  type: typeof AUTH_FAILURE;
  error: AxiosError | Error;
}

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

export type AuthActionTypes =
  | IAuthRequest
  | IAuthSuccess
  | IAuthFailure
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutFailure;
