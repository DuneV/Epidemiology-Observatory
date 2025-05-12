import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Contacto</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestros datos, necesitas información específica o quieres colaborar con el
            Observatorio Epidemiológico Nacional? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6 gradient-text">Envíanos un mensaje</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="institucion" className="block text-sm font-medium text-gray-700 mb-1">
                    Institución
                  </label>
                  <input
                    type="text"
                    id="institucion"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto *
                  </label>
                  <select
                    id="asunto"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="consulta-datos">Consulta sobre datos epidemiológicos</option>
                    <option value="solicitud-informacion">Solicitud de información específica</option>
                    <option value="colaboracion">Propuesta de colaboración</option>
                    <option value="soporte-tecnico">Soporte técnico</option>
                    <option value="prensa">Consulta de prensa</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacidad"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300"
                      required
                    />
                  </div>
                  <label htmlFor="privacidad" className="ml-2 text-sm text-gray-500">
                    He leído y acepto la{" "}
                    <Link href="#" className="text-green-600 hover:underline">
                      política de privacidad
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 animate-fade-in">
              <h2 className="text-xl font-semibold mb-6 gradient-text">Información de contacto</h2>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-4">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Correo electrónico</p>
                    <a href="mailto:info@observatorio-epidemiologico.org" className="text-green-600 hover:underline">
                      info@observatorio-epidemiologico.org
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-4">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <a href="tel:+123456789" className="text-green-600 hover:underline">
                      (123) 456-7890
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-4">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Dirección</p>
                    <address className="not-italic text-gray-600">
                      Av. Salud Pública 123
                      <br />
                      Ciudad Capital
                      <br />
                      Código Postal 12345
                    </address>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-4">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Horario de atención</p>
                    <p className="text-gray-600">Lunes a viernes: 8:00 - 17:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm animate-fade-in">
              <h2 className="text-xl font-semibold mb-6 gradient-text">Áreas específicas</h2>
              <ul className="space-y-4">
                <li className="p-3 rounded-xl hover:bg-green-50 transition-colors">
                  <p className="font-medium">Dirección General</p>
                  <a
                    href="mailto:direccion@observatorio-epidemiologico.org"
                    className="text-green-600 hover:underline text-sm"
                  >
                    direccion@observatorio-epidemiologico.org
                  </a>
                </li>
                <li className="p-3 rounded-xl hover:bg-green-50 transition-colors">
                  <p className="font-medium">Departamento de Análisis de Datos</p>
                  <a
                    href="mailto:analisis@observatorio-epidemiologico.org"
                    className="text-green-600 hover:underline text-sm"
                  >
                    analisis@observatorio-epidemiologico.org
                  </a>
                </li>
                <li className="p-3 rounded-xl hover:bg-green-50 transition-colors">
                  <p className="font-medium">Vigilancia Epidemiológica</p>
                  <a
                    href="mailto:vigilancia@observatorio-epidemiologico.org"
                    className="text-green-600 hover:underline text-sm"
                  >
                    vigilancia@observatorio-epidemiologico.org
                  </a>
                </li>
                <li className="p-3 rounded-xl hover:bg-green-50 transition-colors">
                  <p className="font-medium">Prensa y Comunicaciones</p>
                  <a
                    href="mailto:prensa@observatorio-epidemiologico.org"
                    className="text-green-600 hover:underline text-sm"
                  >
                    prensa@observatorio-epidemiologico.org
                  </a>
                </li>
                <li className="p-3 rounded-xl hover:bg-green-50 transition-colors">
                  <p className="font-medium">Soporte Técnico</p>
                  <a
                    href="mailto:soporte@observatorio-epidemiologico.org"
                    className="text-green-600 hover:underline text-sm"
                  >
                    soporte@observatorio-epidemiologico.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white p-8 rounded-2xl shadow-sm animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 gradient-text text-center">Ubicación</h2>
          <div className="h-80 bg-gray-100 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Mapa de ubicación</p>
            {/* Aquí se integraría un mapa real con Google Maps, Mapbox u otra plataforma */}
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-sm animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Preguntas frecuentes</h2>
            <p className="text-gray-600 mb-8">
              Antes de contactarnos, quizás encuentres respuesta a tu pregunta en nuestra sección de preguntas
              frecuentes.
            </p>
            <Link
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Ver preguntas frecuentes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
