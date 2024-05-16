import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";

export default function Appbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      enableColorOnDark={true}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      color="secondary"
    >
      <Toolbar>
        <Link
          to={"/"}
          className=" ease-in-out transition duration-100 font-bold text-xl px-4 py-2 rounded-lg hover:bg-orange-100 hover:scale-105"
        >
          SIAC
        </Link>
      </Toolbar>
    </AppBar>
  );
}
