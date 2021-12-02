import {
  IUserLoginData,
  IUserRegistrationData,
} from "@/redux/auth/auth.interfaces";
import { IClothesResponseData } from "@/redux/clothes/clothes.interfaces";
import axios from "axios";

//fetch data for local development
//const API = axios.create({ baseURL: "http://localhost:5000" });

//fetch data from deployed api
const API = axios.create({ baseURL: "https://eturi-project.herokuapp.com" });

//send the token to the backend middleware so that it can verify our token
API.interceptors.request.use((req) => {
  /*get the Bearer token from the local storage: allows us to get a 
  specific header and based on that we can decode the data in the backend middleware*/
  if (localStorage.getItem("profile")) {
    req.headers!.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")!).token
    }`;
  }
  //return the request for future api calls
  return req;
});

//get all clothes
export const fetchClothes = () => API.get("/clothes");

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
export const login = (loginData: IUserLoginData) =>
  API.post("/user/signin", loginData);
export const register = (signUpData: IUserRegistrationData) =>
  API.post("/user/signup", signUpData);
