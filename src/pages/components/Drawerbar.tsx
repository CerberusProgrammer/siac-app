import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Toolbar,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useState } from "react";
import { ROUTES } from "../../config/routes/routes";

export default function Drawerbar() {
  const [selected, setSelected] = useState(0);

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
      <Box sx={{ overflow: "auto" }}>
        {ROUTES.map((text, index) => (
          <ListItem key={text.title}>
            <ListItemButton
              selected={index === selected}
              component={Link}
              to={text.to}
              onClick={() => setSelected(index)}
              className=" ease-in-out transition hover:scale-105"
            >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </Drawer>
  );
}
