import {
  ILoginResult,
  IUserRegistrationData,
} from "../redux/auth/auth.interfaces";
import {
  IClothesResponseData,
  IFilterClothesResponse,
} from "../redux/clothes/clothes.interfaces";
import { store } from "../redux/store";
import axios from "axios";

//fetch data for local development
const API = axios.create({ baseURL: "http://localhost:5000" });

//fetch data from deployed api
//const API = axios.create({ baseURL: "https://eturi-project.herokuapp.com" });

API.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.auth?.token || state.auth.googleAuth?.token;
    if (token) {
      config!.headers!.Authorization! = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//get all clothes
export const fetchClothes = (page?: string | number) =>
  API.get(`/clothes?page=${page}`);

//add clothes
export const addClothes = (newClothes: IClothesResponseData) =>
  API.post("/clothes", newClothes);

//update a single clothes item
export const updateClothes = (
  id?: string,
  updatedClothes?: IClothesResponseData
) => {
  return API.patch(`/clothes/${id}`, updatedClothes);
};

//get a single clothes item
export const getClothesById = (id: string) => API.get(`/clothes`);

//delete a single clothes item
export const deleteClothes = (id: string) => API.delete(`/clothes/${id}`);

//like a single clothes item
export const likeClothes = (id: string) =>
  API.patch(`/clothes/${id}/likeClothes`);

//login
export const login = (loginData: ILoginResult) =>
  API.post("/user/signin", loginData);

export const register = (signUpData: IUserRegistrationData) =>
  API.post("/user/signup", signUpData);

export const fetchClothesBySearch = (searchQuery: string) =>
  API.get(`/clothes/search?searchQuery=${searchQuery || "none"}`);

export const filterClothes = (filterParameters: IFilterClothesResponse) =>
  API.get(`/clothes/filter?filterQuery=${JSON.stringify(filterParameters)}`);

export const verifyUser = (confirmationToken: string) =>
  API.get("/user/confirm/" + confirmationToken);
