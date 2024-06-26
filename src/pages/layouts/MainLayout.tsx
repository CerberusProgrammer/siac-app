import Box from "@mui/material/Box";
import { CssBaseline, Toolbar } from "@mui/material";
import Appbar from "../components/Appbar";
import Drawerbar from "../components/Drawerbar";

type Props = { children: JSX.Element | JSX.Element[] };

export default function MainLayout({ children }: Props) {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Appbar />
      <Drawerbar />

      <Box component="main" sx={{ flexGrow: 1, px: 2 }}>
        <Toolbar />
        {children}
      </Box>
    </div>
  );
}
