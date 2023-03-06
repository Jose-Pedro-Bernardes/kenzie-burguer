export interface iInput {
  label: string;
  textErr?: string;
}

export interface iUserEntrieLogin {
  email: string;
  password: string;
}

export interface iEntrieRegister {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}
