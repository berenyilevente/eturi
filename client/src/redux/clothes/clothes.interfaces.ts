export interface IClothesState {
  isLoading: boolean;
  errorMessage: string | null;
  clothes: IClothesResponseData[];
  clothesAdded: IClothesResponseData[];
}

export interface IClothesResponseData {
  selectedFile?: string;
  name?: string;
  description?: string;
  category: string;
  brand: string;
  size: string;
  condition: string;
  colour: string;
  price?: Number;
  createdAt?: Date;
}
[];
