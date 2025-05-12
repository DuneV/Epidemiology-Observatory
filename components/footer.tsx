import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="inline-block w-8 h-1 bg-green-400 mr-2 rounded-full"></span>
              Observatorio Epidemiológico Nacional
            </h3>
            <p className="text-sm text-gray-300">
              Plataforma de monitoreo y análisis de indicadores de salud pública para la toma de decisiones informadas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="inline-block w-8 h-1 bg-green-400 mr-2 rounded-full"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/indicadores" className="hover:text-green-400 transition-colors">
                  Indicadores y tendencias
                </Link>
              </li>
              <li>
                <Link href="/publicaciones" className="hover:text-green-400 transition-colors">
                  Publicaciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-green-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="inline-block w-8 h-1 bg-green-400 mr-2 rounded-full"></span>
              Contacto
            </h3>
            <address className="text-sm text-gray-300 not-italic">
              <p>Av. Salud Pública 123</p>
              <p>Ciudad Capital</p>
              <p>Tel: (123) 456-7890</p>
              <p>Email: info@observatorio-epidemiologico.org</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Observatorio Epidemiológico Nacional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
