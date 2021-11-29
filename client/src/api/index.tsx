import { IClothesResponseData } from "@/redux/clothes/clothes.interfaces";
import axios from "axios";

//fetch data for local development
//const url = "http://localhost:5000/clothes";

//fetch data from deployed api
const url = "https://eturi-project.herokuapp.com/clothes";

//get all clothes
export const fetchClothes = () => axios.get(url);

//add clothes
export const addClothes = (newClothes: IClothesResponseData) =>
  axios.post(url, newClothes);

//update a single clothes item
export const updateClothes = (
  id?: string,
  updatedClothes?: IClothesResponseData
) => {
  return axios.patch(`${url}/${id}`, updatedClothes);
};

//get a single clothes item
export const getClothesById = (id: string) => axios.get(`${url}`);

//delete a single clothes item
export const deleteClothes = (id: string) => axios.delete(`${url}/${id}`);

//like a single clothes item
export const likeClothes = (id: string) =>
  axios.patch(`${url}/${id}/likeClothes`);
