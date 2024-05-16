import { Link } from "react-router-dom";

export default function ErrorScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <p className="font-bold text-2xl opacity-80">¡Ups...!</p>
      <p className=" font-md opacity-60 text-xl">
        Lo sentimos no hemos encontrado la ruta que buscas.
      </p>
      <div>
        <Link
          to={"/"}
          className=" ease-in-out transition px-4 py-2 rounded-lg bg-orange-100 font-bold text-xl text-orange-500 hover:scale-105 cursor-pointer active:scale-95"
        >
          Volver
        </Link>
      </div>
    </div>
  );
}
