import {
  AuthActionTypes,
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
import { IDefaultAuthState } from "./auth.interfaces";

const defaultClothesState: IDefaultAuthState = {
  isAuthLoading: undefined,
  errorMessage: null,
  auth: undefined,
  isUserLoggedIn: false,
  verificationSuccess: undefined,
};

const authReducer = (
  state = defaultClothesState,
  action: AuthActionTypes
): IDefaultAuthState => {
  switch (action.type) {
    case GOOGLE_AUTH_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
        errorMessage: null,
      };
    case GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
        errorMessage: null,
        googleAuth: action.payload,
        isUserLoggedIn: true,
      };
    case GOOGLE_AUTH_FAILURE:
      return {
        ...state,
        isAuthLoading: false,
        errorMessage: action.error,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
        errorMessage: null,
      };
    case LOGOUT_SUCCESS:
      return (
        localStorage.clear(),
        {
          ...state,
          isAuthLoading: false,
          isUserLoggedIn: false,
          auth: null,
        }
      );
    case LOGOUT_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
        isUserLoggedIn: false,
        errorMessage: null,
      };
    case LOGIN_SUCCESS:
      return {
        errorMessage: null,
        isAuthLoading: false,
        isUserLoggedIn: true,
        auth: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthLoading: false,
        isUserLoggedIn: false,
        errorMessage: action.error,
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
        isAuthLoading: false,
        errorMessage: action.error,
      };
    case VERIFY_USER_REQUEST:
      return {
        ...state,
        errorMessage: null,
      };
    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        verificationSuccess: true,
      };
    case VERIFY_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
      };

    default:
      return state;
  }
};

export default authReducer;
