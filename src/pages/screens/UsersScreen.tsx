import { useEffect, useState } from "react";
import { UsuariosService } from "../../services/UsuariosService";
import { Usuario } from "../../models/Usuario";
import { CircularProgress } from "@mui/material";
import FAB from "../components/FAB";
import { AddRounded } from "@mui/icons-material";

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress size={50} />
        </div>
      ) : (
        <>
          {users.map((user) => (
            <div key={user.usrid}>{user.nombre}</div>
          ))}
        </>
      )}
      <FAB icon={<AddRounded />} onTap={() => {}} />
    </>
  );
}
