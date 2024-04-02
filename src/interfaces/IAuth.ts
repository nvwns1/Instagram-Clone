export interface ICreateUserForm {
  email: string;
  password: string;
  fullName?: string;
  username?: string;
}
export interface AuthError {
  code: string;
  message: string;
}
export const initialCreateUserForm: ICreateUserForm = {
  email: "",
  password: "",
  fullName: "",
  username: "",
};

export const initialLoginForm: ICreateUserForm = {
  email: "",
  password: "",
};
