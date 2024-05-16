import LoginScreen from "../../pages/screens/auth/LoginScreen";
import HomeScreen from "../../pages/screens/HomeScreen";
import UserScreen from "../../pages/screens/users/UserScreen";
import UsersScreen from "../../pages/screens/users/UsersScreen";
import { createBrowserRouter } from "react-router-dom";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/users",
    element: <UsersScreen />,
    children: [
      {
        path: ":id",
        element: <UserScreen />,
      },
    ],
  },
]);
