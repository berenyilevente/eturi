import { AxiosError } from "axios";

export interface IDefaultAuthState {
  isAuthLoading?: boolean;
  errorMessage: AxiosError | Error | null;
  auth?: IRegisterResponseData | null;
  googleAuth?: IGoogleAuthResponse;
  isUserLoggedIn?: boolean;
}

export interface IGoogleAuthResponse {
  result?: IAuthResponseData;
  token?: string;
}

export interface IAuthResponseData {
  googleId?: string;
  email?: string;
  familyName?: string;
  givenName?: string;
  imageUrl?: string;
  name?: string;
}

export interface IUserAuthState {
  isLogin: boolean;
}

export interface IRegisterResponseData {
  result: IUserRegistrationData;
  token?: string;
}

export interface ILoginResponseData {
  result: ILoginResult;
  token?: string;
}

export interface ILoginResult {
  email?: string;
  password?: string;
}

export interface IUserRegistrationData {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
}
