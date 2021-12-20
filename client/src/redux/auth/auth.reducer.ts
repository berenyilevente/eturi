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
} from "./auth.types";
import { IDefaultAuthState } from "./auth.interfaces";

const defaultClothesState: IDefaultAuthState = {
  isAuthLoading: undefined,
  errorMessage: null,
  auth: [],
  isUserLoggedIn: false,
};

const authReducer = (
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
          isAuthLoading: false,
          errorMessage: null,
          isUserLoggedIn: true,
        }
      );
    case AUTH_FAILURE:
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
      return (
        localStorage.setItem("profile", JSON.stringify({ ...action.payload })),
        {
          errorMessage: null,
          isAuthLoading: false,
          isUserLoggedIn: true,
          ...action.payload,
        }
      );
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

    default:
      return state;
  }
};

export default authReducer;
