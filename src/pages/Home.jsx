export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/coche.jpg"
          alt="Taller García"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80" />
      </div>

      {/* Contenido sobre la imagen */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Especialistas en neumáticos,
          <br />
          mecánica rápida y accesorios
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          para el automóvil
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/servicios"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-sm font-semibold transition"
          >
            Ver Servicios
          </a>
          <a
            href="/contacto"
            className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-sm font-semibold transition"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}
