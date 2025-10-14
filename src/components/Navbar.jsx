import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext"; // importa tu contexto

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext); // 👈 usa el contexto
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout(); // 👈 usa la función del contexto
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md w-full z-50">
      <div className="flex justify-between items-center px-6 py-3">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.jpg" alt="Logo" className="h-10 w-auto" />
        </Link>

        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col bg-black bg-opacity-95 text-white px-6 pb-4 gap-2">
          <Link
            to="/servicios"
            onClick={toggleMenu}
            className="block w-full py-2 hover:text-gray-300"
          >
            SERVICIOS MECÁNICOS
          </Link>
          <Link
            to="/nosotros"
            onClick={toggleMenu}
            className="block w-full py-2 hover:text-gray-300"
          >
            NOSOTROS
          </Link>
          <Link
            to="/contacto"
            onClick={toggleMenu}
            className="block w-full py-2 hover:text-gray-300"
          >
            CONTACTO
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                onClick={toggleMenu}
                className="block w-full py-2 hover:text-gray-300"
              >
                DASHBOARD
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left py-2 hover:text-red-400"
              >
                CERRAR SESIÓN
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="block w-full py-2 hover:text-gray-300"
              >
                INICIAR SESIÓN
              </Link>
              <Link
                to="/register"
                onClick={toggleMenu}
                className="block w-full border border-white px-4 py-2 rounded-lg text-center hover:bg-white hover:text-black transition"
              >
                REGISTRARSE
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
