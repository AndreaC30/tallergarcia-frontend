import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md w-full z-50">
      {/* Header con logo y botón de menú */}
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

      {/* Menú vertical */}
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
