import { AxiosError } from "axios";
import { IClothesResponseData, ITriggerReload } from "./clothes.interfaces";

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

export const SET_TRIGGER_RELOAD = "SET_TRIGGER_RELOAD";
export const RESET_TRIGGER_RELOAD = "RESET_TRIGGER_RELOAD";

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
  payload: IClothesResponseData[];
}
export interface IUpdateClothesFailureAction {
  type: typeof UPDATE_CLOTHES_FAILURE;
  error: AxiosError;
}

//Trigger reload
export interface ISetTriggerReload {
  type: typeof SET_TRIGGER_RELOAD;
  payload: ITriggerReload;
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
  | IUpdateClothesFailureAction;
