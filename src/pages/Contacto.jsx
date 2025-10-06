import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    emailConfirmacion: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    rgpd: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
        Haz tu consulta
      </h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">
            NOMBRE <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">
              EMAIL <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              CONFIRMAR EMAIL <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="emailConfirmacion"
              value={formData.emailConfirmacion}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            TELÉFONO <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">ASUNTO</label>
          <input
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">MENSAJE</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="rgpd"
            checked={formData.rgpd}
            onChange={handleChange}
            required
            className="mt-1"
          />
          <label className="text-sm text-gray-600">
            Doy mi consentimiento para que esta web almacene la información que
            envío para que puedan responder a mi petición.
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700 transition-colors"
          >
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
}
