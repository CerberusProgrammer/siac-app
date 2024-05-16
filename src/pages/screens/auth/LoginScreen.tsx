import { useEffect, useState } from "react";
import CircularLoading from "../../components/CircularLoading";
import Dialog from "../../components/Dialog";
import { LoginService } from "../../../services/LoginService";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isDialogOpen) {
      (
        document.getElementById("error_dialog") as HTMLDialogElement
      ).showModal();
    }
  }, [isDialogOpen]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/";
    }
  }, []);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    (document.getElementById("error_dialog") as HTMLDialogElement).close();
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage("Por favor, introduce tu usuario y contraseña.");
      setIsDialogOpen(true);
      return;
    }

    setLoading(true);

    try {
      await LoginService.login(username, password);
      window.location.href = "/";
    } catch (e) {
      console.error(e);
      const error = e as Error;
      setErrorMessage(error.message);
      setIsDialogOpen(true);
      setLoading(false);
    }
  };

  const handleRegister = () => {
    window.location.href = "/register";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-sm w-96">
        <p className="w-full font-bold text-4xl text-center mb-8">SIAC</p>

        {loading ? (
          <CircularLoading />
        ) : (
          <>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-md mb-4 font-medium text-lg border-2 border-gray-200"
            />
            <input
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md mb-4 font-medium text-lg border-2 border-gray-200"
            />
            <button
              className="btn btn-ghost w-full text-base font-bold py-2 rounded-xl mb-2 bg-orange-500 text-white hover:bg-orange-600 transform active:scale-90 transition duration-150"
              onClick={() => handleLogin()}
            >
              Iniciar sesión
            </button>
            <button
              className="btn btn-ghost w-full bg-orange-100 text-orange-500 text-base font-bold py-2 rounded-xl mb-2 hover:bg-orange-200 transform active:scale-90 transition duration-150"
              onClick={() => handleRegister()}
            >
              Registrarse
            </button>
            {isDialogOpen && (
              <Dialog
                title="Error"
                message={errorMessage}
                onClick={handleCloseDialog}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
