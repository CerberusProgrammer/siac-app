import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { Avatar, Divider, Menu, useMediaQuery, useTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    navigate("/login");
  };

  return (
    <div>
      <button
        className="flex flex-row ease-in-out transition items-center duration-100 rounded-lg px-4 py-2 font-bold opacity-50 hover:bg-orange-100 hover:opacity-100 space-x-4 hover:scale-105"
        onClick={handleClick}
      >
        <Avatar
          sx={{
            bgcolor: orange[400],
            width: 32,
            height: 32,
          }}
        >
          A
        </Avatar>

        {!isSmallScreen && (
          <>
            <div className="text-start">
              <p className=" text-sm">User</p>
              <p className="text-xs opacity-50">Administrador</p>
            </div>
            <KeyboardArrowDownRounded />
          </>
        )}
      </button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={3}
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
          <Divider />
          <button
            className=" ease-in-out transition duration-100 hover:scale-105 px-4 py-1 hover:bg-orange-100 opacity-70 hover:opacity-100 font-bold hover:text-orange-500 w-full text-md"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </Menu>
    </div>
  );
}
