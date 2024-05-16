import { createContext, useContext } from "react";
import { lightTheme } from "./AppTheme";

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
