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
