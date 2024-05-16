import {
  ArrowForwardIosRounded,
  KeyboardArrowDownRounded,
} from "@mui/icons-material";
import { Avatar, Breadcrumbs, Menu, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Appbar() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [anchorEl, setAnchorEl] = useState(null);
  const [elevation, setElevation] = useState(0);

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

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<ArrowForwardIosRounded fontSize="small" />}
          >
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {value}
                </Typography>
              ) : (
                <Link color="inherit" to={to} key={to}>
                  {value}
                </Link>
              );
            })}
          </Breadcrumbs>
        </div>

        <button
          className="flex flex-row ease-in-out transition items-center duration-100 rounded-lg px-4 py-2 font-bold opacity-50 hover:bg-orange-100 hover:opacity-100 space-x-4 hover:scale-105"
          onClick={handleClick}
        >
          <Avatar></Avatar>
          <div className="text-start">
            <p className="">User</p>
            <p className="text-xs opacity-50">Administrador</p>
          </div>
          <KeyboardArrowDownRounded />
        </button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          elevation={1}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <div className="space-y-2 flex flex-col">
            <button
              className=" ease-in-out transition duration-100 hover:scale-105 px-4 py-1 hover:bg-orange-100 opacity-70 hover:opacity-100 font-bold hover:text-orange-500 w-full text-md"
              onClick={handleClose}
            >
              Perfil
            </button>
            <button
              className=" ease-in-out transition duration-100 hover:scale-105 px-4 py-1 hover:bg-orange-100 opacity-70 hover:opacity-100 font-bold hover:text-orange-500 w-full text-md"
              onClick={handleClose}
            >
              Configuración
            </button>
            <button
              className=" ease-in-out transition duration-100 hover:scale-105 px-4 py-1 hover:bg-orange-100 opacity-70 hover:opacity-100 font-bold hover:text-orange-500 w-full text-md"
              onClick={handleClose}
            >
              Cerrar sesión
            </button>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
