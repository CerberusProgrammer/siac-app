import { Toolbar, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import BreadcrumbsRoute from "./BreadcrumbsRoute";
import { useThemeContext } from "../../config/theme/ThemeContext";

export default function Appbar() {
  const [elevation, setElevation] = useState(0);
  const theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleTheme } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setElevation(3);
      } else {
        setElevation(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={elevation}
      enableColorOnDark={true}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      color="secondary"
    >
      <Toolbar className=" justify-between">
        <div className="flex flex-row items-center space-x-4">
          <Link
            to={"/"}
            className=" ease-in-out transition duration-100 font-bold text-xl px-4 py-2 rounded-lg hover:bg-orange-100 hover:scale-105 cursor-pointer active:scale-95 active:bg-orange-200 hover:text-orange-500"
          >
            SIAC
          </Link>
          {!isSmallScreen && <BreadcrumbsRoute />}
        </div>
        <UserMenu />
        <button onClick={toggleTheme}>toggle theme</button>{" "}
      </Toolbar>
    </AppBar>
  );
}
