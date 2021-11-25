import {
  ADD_CLOTHES_FAILURE,
  ADD_CLOTHES_REQUEST,
  ADD_CLOTHES_SUCCESS,
  ClothesActionTypes,
  GET_CLOTHES_FAILURE,
  GET_CLOTHES_REQUEST,
  GET_CLOTHES_SUCCESS,
} from "./clothes.types";
import { IClothesState } from "./clothes.interfaces";

const defaultClothesState: IClothesState = {
  isLoading: false,
  errorMessage: null,
  clothes: [],
  clothesAdded: [],
};

export default (
  state = defaultClothesState,
  action: ClothesActionTypes
): IClothesState => {
  switch (action.type) {
    case GET_CLOTHES_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case GET_CLOTHES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        clothes: action.payload,
      };
    case GET_CLOTHES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message,
      };
    case ADD_CLOTHES_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case ADD_CLOTHES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        clothesAdded: action.payload,
      };
    case ADD_CLOTHES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message,
      };
    default:
      return state;
  }
};
