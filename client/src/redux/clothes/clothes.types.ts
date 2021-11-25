import { AxiosError } from "axios";
import { IClothesResponseData } from "./clothes.interfaces";

export const GET_CLOTHES_REQUEST = "GET_CLOTHES_REQUEST";
export const GET_CLOTHES_SUCCESS = "GET_CLOTHES_SUCCESS";
export const GET_CLOTHES_FAILURE = "GET_CLOTHES_FAILURE";

export const ADD_CLOTHES_REQUEST = "ADD_CLOTHES_REQUEST";
export const ADD_CLOTHES_SUCCESS = "ADD_CLOTHES_SUCCESS";
export const ADD_CLOTHES_FAILURE = "ADD_CLOTHES_FAILURE";

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

export type ClothesActionTypes =
  | IGetClothesRequestAction
  | IGetClothesSuccessAction
  | IGetClothesFailureAction
  | IAddClothesRequestAction
  | IAddClothesSuccessAction
  | IAddClothesFailureAction;
