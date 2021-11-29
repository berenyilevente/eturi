import {
  ADD_CLOTHES_FAILURE,
  ADD_CLOTHES_REQUEST,
  ADD_CLOTHES_SUCCESS,
  ClothesActionTypes,
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
import { IClothesState } from "./clothes.interfaces";

const defaultClothesState: IClothesState = {
  isClothesLoading: undefined,
  errorMessage: null,
  clothes: [],
  showClothes: [],
  clothesAdded: [],
  clothesUpdated: [],
  triggerReload: true,
  likeLoading: false,
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
        showClothes: action.payload,
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
        clothes: state.clothes.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case UPDATE_CLOTHES_FAILURE:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: action.error.message,
      };
    case DELETE_CLOTHES_REQUEST:
      return {
        ...state,
        isClothesLoading: true,
        errorMessage: null,
      };
    case DELETE_CLOTHES_SUCCESS:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: null,
        clothes: state.clothes.filter(
          (clothes) => clothes._id !== action.payload._id
        ),
      };
    case DELETE_CLOTHES_FAILURE:
      return {
        ...state,
        isClothesLoading: false,
        errorMessage: action.error.message,
      };

    case LIKE_CLOTHES_REQUEST:
      return {
        ...state,
        likeLoading: true,
        errorMessage: null,
      };
    case LIKE_CLOTHES_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        likeLoading: false,
        clothes: state.clothes.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case LIKE_CLOTHES_FAILURE:
      return {
        ...state,
        likeLoading: false,
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
