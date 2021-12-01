export interface IAuthState {
  isAuthLoading?: boolean;
  errorMessage: string | null;
  auth?: IAuthResponseData[] | null;
}

export interface IAuthResponseData {
  googleId: string;
  email: string;
  familyName: string;
  givenName: string;
  imageUrl: string;
  name: string;
}
