import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import "../src/index.css";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./config/routes/routes";
import { lightTheme, darkTheme } from "./config/theme/AppTheme";
import { ThemeContext } from "./config/theme/ThemeContext";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={ROUTES} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
