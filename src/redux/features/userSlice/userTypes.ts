export interface UserState {
  loggedIn: boolean;
  loading: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  phoneNo: string | null;
  userEmail: string | null;
  accessToken: string | null;
}

export type ILoginType = {
  email: string;
  password: string;
};
export type ISignUpType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
