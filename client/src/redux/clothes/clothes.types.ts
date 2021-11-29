import { AxiosError } from "axios";
import {
  IClothesResponseData,
  IDeleteClothesResponseData,
  ILikeClothesResponseData,
  ITriggerLikeLoading,
  ITriggerReload,
  IUpdateClothesResponseData,
} from "./clothes.interfaces";

export const GET_CLOTHES_REQUEST = "GET_CLOTHES_REQUEST";
export const GET_CLOTHES_SUCCESS = "GET_CLOTHES_SUCCESS";
export const GET_CLOTHES_FAILURE = "GET_CLOTHES_FAILURE";

export const GET_CLOTHES_BY_ID_REQUEST = "GET_CLOTHES_BY_ID_REQUEST";
export const GET_CLOTHES_BY_ID_SUCCESS = "GET_CLOTHES_BY_ID_SUCCESS";
export const GET_CLOTHES_BY_ID_FAILURE = "GET_CLOTHES_BY_ID_FAILURE";

export const ADD_CLOTHES_REQUEST = "ADD_CLOTHES_REQUEST";
export const ADD_CLOTHES_SUCCESS = "ADD_CLOTHES_SUCCESS";
export const ADD_CLOTHES_FAILURE = "ADD_CLOTHES_FAILURE";

export const UPDATE_CLOTHES_REQUEST = "UPDATE_CLOTHES_REQUEST";
export const UPDATE_CLOTHES_SUCCESS = "UPDATE_CLOTHES_SUCCESS";
export const UPDATE_CLOTHES_FAILURE = "UPDATE_CLOTHES_FAILURE";

export const DELETE_CLOTHES_REQUEST = "DELETE_CLOTHES_REQUEST";
export const DELETE_CLOTHES_SUCCESS = "DELETE_CLOTHES_SUCCESS";
export const DELETE_CLOTHES_FAILURE = "DELETE_CLOTHES_FAILURE";

export const LIKE_CLOTHES_REQUEST = "LIKE_CLOTHES_REQUEST";
export const LIKE_CLOTHES_SUCCESS = "LIKE_CLOTHES_SUCCESS";
export const LIKE_CLOTHES_FAILURE = "LIKE_CLOTHES_FAILURE";

export const SET_TRIGGER_RELOAD = "SET_TRIGGER_RELOAD";
export const RESET_TRIGGER_RELOAD = "RESET_TRIGGER_RELOAD";

export const SET_LIKE_LOADING = "SET_LIKE_LOADING";

//Get clothes types
export interface IGetClothesRequestAction {
  type: typeof GET_CLOTHES_REQUEST;
}
export interface IGetClothesSuccessAction {
  type: typeof GET_CLOTHES_SUCCESS;
  payload: IClothesResponseData[];
}
export interface IGetClothesFailureAction {
  type: typeof GET_CLOTHES_FAILURE;
  error: AxiosError;
}

//Get clothes by id
export interface IGetClothesByIdRequestAction {
  type: typeof GET_CLOTHES_BY_ID_REQUEST;
}
export interface IGetClothesByIdSuccessAction {
  type: typeof GET_CLOTHES_BY_ID_SUCCESS;
  payload: IClothesResponseData[];
}
export interface IGetClothesByIdFailureAction {
  type: typeof GET_CLOTHES_BY_ID_FAILURE;
  error: AxiosError;
}

//Post clothes types
export interface IAddClothesRequestAction {
  type: typeof ADD_CLOTHES_REQUEST;
}
export interface IAddClothesSuccessAction {
  type: typeof ADD_CLOTHES_SUCCESS;
  payload: IClothesResponseData[];
}
export interface IAddClothesFailureAction {
  type: typeof ADD_CLOTHES_FAILURE;
  error: AxiosError;
}

//Update clothes types
export interface IUpdateClothesRequestAction {
  type: typeof UPDATE_CLOTHES_REQUEST;
}
export interface IUpdateClothesSuccessAction {
  type: typeof UPDATE_CLOTHES_SUCCESS;
  payload: IUpdateClothesResponseData;
}
export interface IUpdateClothesFailureAction {
  type: typeof UPDATE_CLOTHES_FAILURE;
  error: AxiosError;
}

//Delete clothes types
export interface IDeleteClothesRequestAction {
  type: typeof DELETE_CLOTHES_REQUEST;
}
export interface IDeleteClothesSuccessAction {
  type: typeof DELETE_CLOTHES_SUCCESS;
  payload: IDeleteClothesResponseData;
}
export interface IDeleteClothesFailureAction {
  type: typeof DELETE_CLOTHES_FAILURE;
  error: AxiosError;
}

//Like clothes types
export interface ILikeClothesRequestAction {
  type: typeof LIKE_CLOTHES_REQUEST;
}
export interface ILikeClothesSuccessAction {
  type: typeof LIKE_CLOTHES_SUCCESS;
  payload: ILikeClothesResponseData;
}
export interface ILikeClothesFailureAction {
  type: typeof LIKE_CLOTHES_FAILURE;
  error: AxiosError;
}

//Trigger reload
export interface ISetTriggerReload {
  type: typeof SET_TRIGGER_RELOAD;
  payload: ITriggerReload;
}

//Set like loading
export interface ISetLikeLoading {
  type: typeof SET_LIKE_LOADING;
  payload: ITriggerLikeLoading;
}
export type ClothesActionTypes =
  | IGetClothesRequestAction
  | IGetClothesSuccessAction
  | IGetClothesFailureAction
  | IGetClothesByIdRequestAction
  | IGetClothesByIdSuccessAction
  | IGetClothesByIdFailureAction
  | IAddClothesRequestAction
  | IAddClothesSuccessAction
  | IAddClothesFailureAction
  | ISetTriggerReload
  | IUpdateClothesRequestAction
  | IUpdateClothesSuccessAction
  | IUpdateClothesFailureAction
  | ILikeClothesRequestAction
  | ILikeClothesSuccessAction
  | ILikeClothesFailureAction
  | IDeleteClothesRequestAction
  | IDeleteClothesSuccessAction
  | IDeleteClothesFailureAction
  | ISetLikeLoading;
