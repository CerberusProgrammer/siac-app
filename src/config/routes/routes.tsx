import LoginScreen from "../../pages/screens/auth/LoginScreen";
import ErrorScreen from "../../pages/screens/ErrorScreen";
import HomeScreen from "../../pages/screens/HomeScreen";
import UserScreen from "../../pages/screens/users/UserScreen";
import UsersScreen from "../../pages/screens/users/UsersScreen";
import { createBrowserRouter } from "react-router-dom";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/users",
    element: <UsersScreen />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: ":id",
        element: <UserScreen />,
        errorElement: <ErrorScreen />,
      },
    ],
  },
]);
