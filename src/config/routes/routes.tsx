import HomeScreen from "../../pages/screens/HomeScreen";
import { ContactPageRounded, HomeRounded } from "@mui/icons-material";
import UsersScreen from "../../pages/screens/UsersScreen";

export const ROUTES = [
  {
    title: "Home",
    to: "/",
    element: <HomeScreen />,
    icon: <HomeRounded />,
  },
  {
    title: "Users",
    to: "/users",
    element: <UsersScreen />,
    icon: <ContactPageRounded />,
  },
];
