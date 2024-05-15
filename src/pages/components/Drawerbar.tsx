import {
  Box,
  List,
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
  const [selected, setSelected] = useState(1);

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
        <List>
          {ROUTES.map((text, index) => (
            <ListItem key={text.title} disablePadding>
              <ListItemButton
                selected={index === selected}
                component={Link}
                to={text.to}
                onClick={() => setSelected(index)}
              >
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
