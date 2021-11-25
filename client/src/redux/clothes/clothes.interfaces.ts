export interface IClothesState {
  isLoading: boolean;
  errorMessage: string | null;
  clothes: IClothesResponseData[];
  clothesAdded: IClothesResponseData[];
}

export interface IClothesResponseData {
  selectedFile?: String;
  name?: String;
  description?: String;
  category: String;
  brand: String;
  size: String;
  condition: String;
  colour: String;
  price?: Number;
  createdAt?: Date;
}
