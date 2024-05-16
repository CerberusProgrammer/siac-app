import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { Usuario } from "../../../models/Usuario";
import { UsuariosService } from "../../../services/UsuariosService";
import FAB from "../../components/FAB";
import { Link, Outlet, useMatch } from "react-router-dom";
import CircularLoading from "../../components/CircularLoading";
import MainLayout from "../../layouts/MainLayout";

export default function UsersScreen() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Usuario[]>([]);

  const match = useMatch("/users/:id");

  useEffect(() => {
    if (match == null) {
      UsuariosService.getUsuarios().then((data) => {
        setUsers(data);
        setLoading(false);
      });
    }
  }, []);

  return (
    <MainLayout>
      {match != null ? (
        <Outlet />
      ) : (
        <>
          {loading ? (
            <CircularLoading />
          ) : (
            <div className="grid grid-cols-4">
              {users.map((user) => (
                <Button
                  component={Link}
                  to={`/users/${user.usrid}`}
                  key={user.usrid}
                >
                  {user.nombre}
                </Button>
              ))}
            </div>
          )}
          <FAB icon={<AddRounded />} onTap={() => {}} />
        </>
      )}
    </MainLayout>
  );
}
