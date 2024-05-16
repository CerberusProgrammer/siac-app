import { Usuario } from "../models/Usuario";

export type UserState = {
  user: Usuario | null;
};

export const initialUserState: UserState = {
  user: null,
};
