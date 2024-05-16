import { UserAction } from "./UserActions";
import { UserState } from "./UserState";

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "LOGIN":
      throw new Error("Not implemented");
    case "LOGOUT":
      throw new Error("Nor implemented");
    default:
      return state;
  }
};
