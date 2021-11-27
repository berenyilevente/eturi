import {
  ADD_CLOTHES_FAILURE,
  ADD_CLOTHES_REQUEST,
  ADD_CLOTHES_SUCCESS,
  ClothesActionTypes,
  GET_CLOTHES_BY_ID_FAILURE,
  GET_CLOTHES_BY_ID_REQUEST,
  GET_CLOTHES_BY_ID_SUCCESS,
  GET_CLOTHES_FAILURE,
  GET_CLOTHES_REQUEST,
  GET_CLOTHES_SUCCESS,
  SET_TRIGGER_RELOAD,
  UPDATE_CLOTHES_FAILURE,
  UPDATE_CLOTHES_REQUEST,
  UPDATE_CLOTHES_SUCCESS,
} from "./clothes.types";
import { IClothesState } from "./clothes.interfaces";

const defaultClothesState: IClothesState = {
  isClothesLoading: undefined,
  errorMessage: null,
  clothes: [],
  clothesAdded: [],
  clothesUpdated: [],
  triggerReload: true,
};

export default (
  state = defaultClothesState,
  action: ClothesActionTypes
): IClothesState => {
  switch (action.type) {
    case GET_CLOTHES_REQUEST:
      return {
        ...state,
        isClothesLoading: true,
        errorMessage: null,
      };
    case GET_CLOTHES_SUCCESS:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: null,
        clothes: action.payload,
      };
    case GET_CLOTHES_FAILURE:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: action.error.message,
      };
    case GET_CLOTHES_BY_ID_REQUEST:
      return {
        ...state,
        isClothesLoading: true,
        errorMessage: null,
      };
    case GET_CLOTHES_BY_ID_SUCCESS:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: null,
        clothes: action.payload,
      };
    case GET_CLOTHES_BY_ID_FAILURE:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: action.error.message,
      };
    case ADD_CLOTHES_REQUEST:
      return {
        ...state,
        isClothesLoading: true,
        errorMessage: null,
      };
    case ADD_CLOTHES_SUCCESS:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: null,
        clothesAdded: action.payload,
      };
    case ADD_CLOTHES_FAILURE:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: action.error.message,
      };
    case UPDATE_CLOTHES_REQUEST:
      return {
        ...state,
        isClothesLoading: true,
        errorMessage: null,
      };
    case UPDATE_CLOTHES_SUCCESS:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: null,
        clothesUpdated: action.payload,
      };
    case UPDATE_CLOTHES_FAILURE:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: action.error.message,
      };
    case SET_TRIGGER_RELOAD:
      return {
        ...state,
        triggerReload: action.payload.triggerReload,
      };
    default:
      return state;
  }
};
