import { Dispatch } from "redux";
import {
  ADD_CLOTHES_FAILURE,
  ADD_CLOTHES_REQUEST,
  ADD_CLOTHES_SUCCESS,
  DELETE_CLOTHES_FAILURE,
  DELETE_CLOTHES_REQUEST,
  DELETE_CLOTHES_SUCCESS,
  GET_CLOTHES_BY_ID_FAILURE,
  GET_CLOTHES_BY_ID_REQUEST,
  GET_CLOTHES_BY_ID_SUCCESS,
  GET_CLOTHES_FAILURE,
  GET_CLOTHES_REQUEST,
  GET_CLOTHES_SUCCESS,
  LIKE_CLOTHES_FAILURE,
  LIKE_CLOTHES_REQUEST,
  LIKE_CLOTHES_SUCCESS,
  SET_LIKE_LOADING,
  SET_TRIGGER_RELOAD,
  UPDATE_CLOTHES_FAILURE,
  UPDATE_CLOTHES_REQUEST,
  UPDATE_CLOTHES_SUCCESS,
} from "./clothes.types";
import * as api from "../../api";
import {
  IClothesResponseData,
  ITriggerLikeLoading,
  ITriggerReload,
  IUpdateClothesResponseData,
} from "./clothes.interfaces";

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

export const getClothesById = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_CLOTHES_BY_ID_REQUEST,
  });
  try {
    //in the response we always have the data object
    const res = await api.getClothesById(id);
    dispatch({
      type: GET_CLOTHES_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CLOTHES_BY_ID_FAILURE,
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

export const updateClothesAction = (
  id: string,
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

export const deleteClothesAction = (id: string) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: DELETE_CLOTHES_REQUEST,
  });
  try {
    await api.deleteClothes(id);
    dispatch({
      type: DELETE_CLOTHES_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CLOTHES_FAILURE,
      error,
    });
  }
};

export const likeClothesAction = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: LIKE_CLOTHES_REQUEST,
  });

  try {
    const response = await api.likeClothes(id);

    dispatch({
      type: LIKE_CLOTHES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LIKE_CLOTHES_FAILURE,
      error,
    });
  }
};

export const setTriggerReload = (reload: ITriggerReload) => (
  dispatch: Dispatch
) => dispatch({ type: SET_TRIGGER_RELOAD, payload: reload });

export const setLikeLoadingAction = (loadLike: ITriggerLikeLoading) => (
  dispatch: Dispatch
) => dispatch({ type: SET_LIKE_LOADING, payload: loadLike });
