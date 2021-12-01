import {
  AuthActionTypes,
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "./auth.types";
import { IAuthState } from "./auth.interfaces";

const defaultClothesState: IAuthState = {
  isAuthLoading: undefined,
  errorMessage: null,
  auth: [],
};

export default (
  state = defaultClothesState,
  action: AuthActionTypes
): IAuthState => {
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
    default:
      return state;
  }
};
