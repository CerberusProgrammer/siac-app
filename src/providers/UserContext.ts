import { createContext, Dispatch } from "react";
import { initialUserState, UserState } from "./UserState";
import { UserAction } from "./UserActions";

export const UserContext = createContext<{
  state: UserState;
  dispatch: Dispatch<UserAction>;
}>({
  state: initialUserState,
  dispatch: () => {},
});
