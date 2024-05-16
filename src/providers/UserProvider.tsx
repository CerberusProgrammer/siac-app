import { useReducer } from "react";
import { userReducer } from "./UserReducer";
import { UserContext } from "./UserContext";
import { initialUserState } from "./UserState";

type Props = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: Props) {
  //   const savedPasswords = localStorage.getItem("passwords");
  //   const initialState =
  //     savedPasswords && savedPasswords !== "undefined"
  //       ? { passwords: JSON.parse(savedPasswords) }
  //       : { passwords: [] };

  const [state, dispatch] = useReducer(userReducer, initialUserState);

  //   useEffect(() => {
  //     localStorage.setItem("passwords", JSON.stringify(state.passwords));
  //   }, [state.passwords]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
