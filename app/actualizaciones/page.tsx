import Link from "next/link"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"

export default function ActualizacionesPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Actualizaciones y Noticias</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mantente al día con las últimas actualizaciones del Observatorio Epidemiológico Nacional, incluyendo nuevos
            datos, alertas sanitarias y avances en nuestros sistemas de vigilancia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 animate-fade-in">
              <div className="p-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
                  Alerta Sanitaria
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-green-600 transition-colors">
                  <Link href="#">Actualización sobre el brote de dengue en la región occidental</Link>
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>10 de mayo, 2025</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Lectura de 5 minutos</span>
                </div>
                <p className="text-gray-600 mb-4">
                  El Observatorio Epidemiológico Nacional ha detectado un incremento significativo en los casos de
                  dengue en la región occidental del país durante las últimas tres semanas. Los datos de vigilancia
                  muestran un aumento del 45% en comparación con el mismo período del año anterior.
                </p>
                <p className="text-gray-600 mb-4">
                  Las autoridades sanitarias han activado el protocolo de respuesta rápida y están implementando medidas
                  de control vectorial en las áreas más afectadas. Se recomienda a la población tomar precauciones
                  adicionales para evitar la proliferación del mosquito Aedes aegypti, vector de la enfermedad.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 group"
                >
                  Leer más <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 animate-fade-in">
              <div className="p-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                  Actualización de Datos
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-green-600 transition-colors">
                  <Link href="#">Nuevos indicadores de salud materno-infantil disponibles en la plataforma</Link>
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>5 de mayo, 2025</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Lectura de 3 minutos</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Hemos incorporado a nuestra plataforma un nuevo conjunto de indicadores relacionados con la salud
                  materno-infantil, incluyendo tasas de mortalidad materna, cobertura de atención prenatal, y
                  prevalencia de bajo peso al nacer por región.
                </p>
                <p className="text-gray-600 mb-4">
                  Estos datos, actualizados hasta el primer trimestre de 2025, permiten un análisis más detallado de las
                  disparidades geográficas y socioeconómicas en el acceso a servicios de salud para mujeres embarazadas
                  y recién nacidos.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 group"
                >
                  Explorar nuevos indicadores{" "}
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 animate-fade-in">
              <div className="p-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-4">
                  Mejora del Sistema
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-green-600 transition-colors">
                  <Link href="#">Lanzamiento de la nueva versión del sistema de alerta temprana</Link>
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>28 de abril, 2025</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Lectura de 4 minutos</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Nos complace anunciar el lanzamiento de la versión 2.0 de nuestro Sistema de Alerta Temprana para
                  Emergencias Epidemiológicas (SATEE). Esta actualización incorpora algoritmos mejorados de inteligencia
                  artificial para la detección de anomalías en patrones de enfermedades.
                </p>
                <p className="text-gray-600 mb-4">
                  El nuevo sistema ha demostrado una mejora del 30% en la sensibilidad para detectar brotes potenciales
                  en sus etapas iniciales, lo que permite una respuesta más rápida y efectiva por parte de las
                  autoridades sanitarias.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 group"
                >
                  Conocer más sobre el SATEE 2.0{" "}
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <nav aria-label="Paginación" className="inline-flex rounded-full bg-white shadow-sm p-1">
                <Link href="#" className="px-4 py-2 text-sm text-gray-500 hover:text-green-600 rounded-full">
                  Anterior
                </Link>
                <Link href="#" className="px-4 py-2 text-sm text-white bg-green-600 rounded-full">
                  1
                </Link>
                <Link href="#" className="px-4 py-2 text-sm text-gray-500 hover:text-green-600 rounded-full">
                  2
                </Link>
                <Link href="#" className="px-4 py-2 text-sm text-gray-500 hover:text-green-600 rounded-full">
                  3
                </Link>
                <Link href="#" className="px-4 py-2 text-sm text-gray-500 hover:text-green-600 rounded-full">
                  Siguiente
                </Link>
              </nav>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 animate-fade-in">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-200 rounded-full bg-gray-50 focus:ring-green-500 focus:border-green-500"
                  placeholder="Buscar actualizaciones..."
                />
              </div>

              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="inline-block w-6 h-1 bg-green-400 mr-2 rounded-full"></span>
                Categorías
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between text-gray-600 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <span>Alertas Sanitarias</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">12</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between text-gray-600 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <span>Actualizaciones de Datos</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">28</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between text-gray-600 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <span>Mejoras del Sistema</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">9</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between text-gray-600 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <span>Eventos y Capacitaciones</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">15</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between text-gray-600 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <span>Colaboraciones</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">7</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 animate-fade-in">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="inline-block w-6 h-1 bg-green-400 mr-2 rounded-full"></span>
                Suscríbete a nuestras actualizaciones
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Recibe las últimas noticias y alertas directamente en tu correo electrónico.
              </p>
              <form className="space-y-3">
                <div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tu correo electrónico"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300"
                      required
                    />
                  </div>
                  <label htmlFor="terms" className="ml-2 text-xs text-gray-500">
                    Acepto recibir comunicaciones del Observatorio Epidemiológico Nacional
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-4 rounded-full transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 animate-fade-in">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="inline-block w-6 h-1 bg-red-400 mr-2 rounded-full"></span>
                Alerta Activa
              </h3>
              <div className="flex items-center mb-3">
                <div className="relative">
                  <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="h-3 w-3 bg-red-500 rounded-full absolute top-0 animate-ping"></div>
                </div>
                <span className="ml-2 text-sm font-medium text-red-600">Nivel de alerta: Moderado</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Incremento de casos de infecciones respiratorias agudas en la región norte del país.
              </p>
              <Link
                href="#"
                className="text-sm font-medium text-red-600 hover:text-red-700 inline-flex items-center group"
              >
                Ver detalles <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
