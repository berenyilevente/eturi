import { IClothesResponseData } from "@/redux/clothes/clothes.interfaces";
import axios from "axios";

const url = "http://localhost:5000/clothes";

export const fetchClothes = () => axios.get(url);

export const addClothes = (newClothes: IClothesResponseData) =>
  axios.post(url, newClothes);

export const updateClothes = (
  id: string,
  updatedClothes: IClothesResponseData
) => axios.patch(`${url}/${id}`);

export const getClothesById = (id: string) => axios.get(`${url}/:id${id}`);
