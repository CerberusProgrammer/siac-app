import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from "./config/theme/AppTheme";
import "../src/index.css";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./config/routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={ROUTES} />
    </ThemeProvider>
  </React.StrictMode>
);
