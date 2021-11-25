export interface IClothesState {
  isLoading?: boolean;
  errorMessage: string | null;
  clothes: IClothesResponseData[];
  clothesAdded: IClothesResponseData[];
}

export interface IClothesResponseData {
  id?: number;
  selectedFile: string;
  name?: string;
  description?: string;
  category: string;
  brand: string;
  size: string;
  condition: string;
  colour: string;
  price?: string;
  createdAt?: Date;
}
[];
