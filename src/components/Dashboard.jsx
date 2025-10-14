<p>Bienvenido, {localStorage.getItem("email")}</p>;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Si no hay token, redirige al login
      navigate("/login");
    }
  }, [navigate]);

  const email = localStorage.getItem("email");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">¡Bienvenido!</h1>
        <p className="text-lg text-gray-600">
          Has iniciado sesión como{" "}
          <span className="font-semibold">{email}</span>
        </p>

        <button
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            navigate("/login");
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
