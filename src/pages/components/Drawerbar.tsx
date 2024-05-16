import { HomeRounded, PersonRounded } from "@mui/icons-material";
import { Drawer, Toolbar } from "@mui/material";

import { NavLink } from "react-router-dom";

export default function Drawerbar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <div className={"px-4 space-y-2 flex flex-col"}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold px-4 py-2 rounded-lg ease-in-out transition hover:scale-105 hover:bg-orange-400 hover:text-white cursor-pointer active:scale-95 active:bg-orange-500 hover:opacity-100 ${
              isActive ? "bg-orange-100 text-orange-500" : ""
            }`
          }
        >
          <div className="flex flex-row space-x-3">
            <HomeRounded />
            <p className=" mt-0.5">Home</p>
          </div>
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `font-bold px-4 py-2 rounded-lg ease-in-out transition hover:scale-105 hover:bg-orange-400 hover:text-white cursor-pointer active:scale-95 active:bg-orange-500 hover:opacity-100 ${
              isActive ? "bg-orange-100 text-orange-500" : ""
            }`
          }
        >
          <div className="flex flex-row space-x-3">
            <PersonRounded />
            <p className=" mt-0.5">Home</p>
          </div>
        </NavLink>
      </div>
    </Drawer>
  );
}
