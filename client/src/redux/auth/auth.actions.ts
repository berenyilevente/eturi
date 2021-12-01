import { Dispatch } from "redux";
import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
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
