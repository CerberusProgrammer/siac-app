import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppRouter from "./config/routes/AppRouter";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from "./config/theme/AppTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
