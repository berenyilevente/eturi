export interface IClothesState {
  isClothesLoading?: boolean;
  errorMessage: string | null;
  clothes: IClothesResponseData[];
  showClothes: IClothesResponseData[];
  clothesAdded: IClothesResponseData[];
  clothesUpdated: IUpdateClothesResponseData[];
  filteredClothes: IClothesResponseData[];
  triggerReload?: boolean;
  likeLoading?: boolean | boolean[];
}

export interface IClothesResponseData {
  _id?: string;
  selectedFile?: string;
  name?: string;
  description?: string;
  category?: string;
  clothingType?: string;
  brand?: string;
  size?: string;
  condition?: string;
  colour?: string;
  price?: string;
  likes?: string[];
  createdAt?: Date;
  creator?: string;
}
[];

export interface IFilterClothesResponse {
  category: string;
  clothingType?: string;
  brand: string;
  size: string;
  condition: string;
  colour: string;
  price: string;
}
export interface IUpdateClothesResponseData {
  _id?: string;
  selectedFile?: string;
  name: string;
  description: string;
  category: string;
  clothingType?: string;
  brand: string;
  size: string;
  condition: string;
  colour: string;
  price: string;
  likes?: string[];
  createdAt?: Date;
}

export interface ILikeClothesResponseData {
  _id?: string;
  selectedFile?: string;
  name: string;
  description: string;
  category: string;
  clothingType?: string;
  brand: string;
  size: string;
  condition: string;
  colour: string;
  price: string;
  likes?: string[];
  createdAt?: Date;
}
export interface IDeleteClothesResponseData {
  _id?: string;
}
export interface ITriggerReload {
  triggerReload: boolean;
}
export interface ITriggerLikeLoading {
  _id?: string;
  likeLoading: boolean;
}
