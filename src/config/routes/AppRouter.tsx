import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import MainLayout from "../../pages/layouts/MainLayout";
import UserScreen from "../../pages/screens/users/UserScreen";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.to}
            path={route.to}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
        <Route
          path="/users/:id"
          element={
            <MainLayout>
              <UserScreen />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <h1>404</h1>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
