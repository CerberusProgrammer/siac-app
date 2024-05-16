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
      <Toolbar className=" justify-between">
        <Link
          to={"/"}
          className=" ease-in-out transition duration-100 font-bold text-xl px-4 py-2 rounded-lg hover:bg-orange-100 hover:scale-105 cursor-pointer active:scale-95 active:bg-orange-200 hover:text-orange-500"
        >
          SIAC
        </Link>
        <button className="flex flex-row ease-in-out transition duration-100 rounded-lg text-sm px-4 py-2 font-bold opacity-50 hover:bg-orange-100 hover:opacity-100">
          <p>User</p>
        </button>
      </Toolbar>
    </AppBar>
  );
}
