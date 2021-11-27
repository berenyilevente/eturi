import { Dispatch } from "redux";
import {
  ADD_CLOTHES_FAILURE,
  ADD_CLOTHES_REQUEST,
  ADD_CLOTHES_SUCCESS,
  GET_CLOTHES_FAILURE,
  GET_CLOTHES_REQUEST,
  GET_CLOTHES_SUCCESS,
  SET_TRIGGER_RELOAD,
  UPDATE_CLOTHES_FAILURE,
  UPDATE_CLOTHES_REQUEST,
  UPDATE_CLOTHES_SUCCESS,
} from "./clothes.types";
import * as api from "../../api";
import { IClothesResponseData, ITriggerReload } from "./clothes.interfaces";

export const getClothes = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_CLOTHES_REQUEST,
  });
  try {
    //in the response we always have the data object
    const res = await api.fetchClothes();
    dispatch({
      type: GET_CLOTHES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CLOTHES_FAILURE,
      error,
    });
  }
};

export const addClothes = (clothes: IClothesResponseData) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: ADD_CLOTHES_REQUEST,
  });
  try {
    const res = await api.addClothes(clothes);
    dispatch({
      type: ADD_CLOTHES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_CLOTHES_FAILURE,
      error,
    });
  }
};

export const setTriggerReload = (reload: ITriggerReload) => (
  dispatch: Dispatch
) => dispatch({ type: SET_TRIGGER_RELOAD, payload: reload });

export const updateClothes = (
  id: number,
  clothes: IClothesResponseData
) => async (dispatch: Dispatch) => {
  dispatch({
    type: UPDATE_CLOTHES_REQUEST,
  });
  try {
    const response = await api.updateClothes(id, clothes);

    dispatch({
      type: UPDATE_CLOTHES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CLOTHES_FAILURE,
      error,
    });
  }
};
