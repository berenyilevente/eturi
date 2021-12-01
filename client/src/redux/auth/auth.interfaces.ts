export interface IDefaultAuthState {
  isAuthLoading?: boolean;
  errorMessage: string | null;
  auth?: IAuthResponseData[] | null;
  isUserLoggedIn?: boolean;
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

export interface IUserLoginData {
  email: string;
  password: string;
}

export interface IUserRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
