import {
  AuthActionTypes,
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
  USER_AUTH_STATE,
} from "./auth.types";
import { IDefaultAuthState } from "./auth.interfaces";

const defaultClothesState: IDefaultAuthState = {
  isAuthLoading: undefined,
  errorMessage: null,
  auth: [],
  isUserLoggedIn: false,
};

export default (
  state = defaultClothesState,
  action: AuthActionTypes
): IDefaultAuthState => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
        errorMessage: null,
      };
    case AUTH_SUCCESS:
      return (
        localStorage.setItem("profile", JSON.stringify({ ...action.payload })),
        {
          ...state,
          isAuthLoading: false,
          errorMessage: null,
          auth: action.payload,
        }
      );
    case AUTH_FAILURE:
      return {
        ...state,
        isAuthLoading: false,
        errorMessage: action.error.message,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
        errorMessage: null,
      };
    case LOGOUT_SUCCESS:
      return { ...state, isAuthLoading: false, auth: null };
    case LOGOUT_FAILURE:
      return {
        ...state,
        errorMessage: action.error.message,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
        errorMessage: null,
      };
    case LOGIN_SUCCESS:
      return { ...state, isAuthLoading: false, auth: null };
    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.error.message,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
        errorMessage: null,
      };
    case SIGNUP_SUCCESS:
      return { ...state, isAuthLoading: false, auth: null };
    case SIGNUP_FAILURE:
      return {
        ...state,
        errorMessage: action.error.message,
      };

    case USER_AUTH_STATE:
      return { errorMessage: null, isUserLoggedIn: action.payload.isLogin };
    default:
      return state;
  }
};
