import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Usuario } from "../../../models/Usuario";
import { UsuariosService } from "../../../services/UsuariosService";
import CircularLoading from "../../components/CircularLoading";

export default function UserScreen() {
  const { id } = useParams();
  const [user, setUser] = useState<Usuario>();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    UsuariosService.getUsuarioById(Number(id)).then((data) => {
      setUser(data);
      setisLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <CircularLoading />
      ) : (
        <>
          {user && (
            <div>
              <h1>
                {user.nombre} {user.apellido_materno} {user.apellido_paterno}
              </h1>
              <h1>{user.email}</h1>
              <h1>{user.telefono}</h1>
              <h1>{user.cliente}</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
}
