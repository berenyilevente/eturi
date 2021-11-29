export interface IClothesState {
  isClothesLoading?: boolean;
  errorMessage: string | null;
  clothes: IClothesResponseData[];
  showClothes: IClothesResponseData[];
  clothesAdded: IClothesResponseData[];
  clothesUpdated: IUpdateClothesResponseData[];
  triggerReload?: boolean;
}

export interface IClothesResponseData {
  _id?: string;
  selectedFile?: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  size: string;
  condition: string;
  colour: string;
  price: string;
  createdAt?: Date;
}
[];

export interface IUpdateClothesResponseData {
  _id?: string;
  selectedFile?: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  size: string;
  condition: string;
  colour: string;
  price: string;
  createdAt?: Date;
}
export interface ITriggerReload {
  triggerReload: boolean;
}
