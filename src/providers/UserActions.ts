import { Usuario } from "../models/Usuario";

export type UserAction =
  | { type: "LOGIN"; payload: Usuario }
  | {
      type: "LOGOUT";
    };
