import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#ffa519",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          opacity: 0.8,
          "&:hover": {
            opacity: 1,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          touchRipple: {
            color: "orange",
            backgroundColor: "#f5efe0",
          },
          "&:hover": {
            backgroundColor: "#f5efe2",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          opacity: 0.5,
          "&:hover": {
            opacity: 1,
          },
        },
      },
    },
  },
});
