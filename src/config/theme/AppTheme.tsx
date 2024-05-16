import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffa519",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffa519",
    },
    secondary: {
      main: "#0f1214",
    },
  },
});

export let myTheme = lightTheme;

export const toggleTheme = () => {
  if (myTheme === lightTheme) {
    myTheme = darkTheme;
  } else {
    myTheme = lightTheme;
  }
};
