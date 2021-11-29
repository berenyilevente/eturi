import {
  IClothesResponseData,
  IUpdateClothesResponseData,
} from "@/redux/clothes/clothes.interfaces";
import axios from "axios";

const url = "http://localhost:5000/clothes";

export const fetchClothes = () => axios.get(url);

export const addClothes = (newClothes: IClothesResponseData) =>
  axios.post(url, newClothes);

export const updateClothes = (
  id?: string,
  updatedClothes?: IClothesResponseData
) => {
  console.log(updatedClothes);
  return axios.patch(`${url}/${id}`, updatedClothes);
};

export const getClothesById = (id: string) => axios.get(`${url}`);
