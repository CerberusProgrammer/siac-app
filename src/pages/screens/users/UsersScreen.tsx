import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { Usuario } from "../../../models/Usuario";
import { UsuariosService } from "../../../services/UsuariosService";
import FAB from "../../components/FAB";
import { Link } from "react-router-dom";
import CircularLoading from "../../components/CircularLoading";

export default function UsersScreen() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Usuario[]>([]);

  useEffect(() => {
    UsuariosService.getUsuarios().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <CircularLoading />
      ) : (
        <div className="flex flex-col">
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
  );
}
