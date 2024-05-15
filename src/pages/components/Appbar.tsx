import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export default function Appbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      color="primary"
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Home drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
