import Link from "next/link"
import Image from "next/image"
import { FileText, Download, ExternalLink, Search, Filter } from "lucide-react"

export default function PublicacionesPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Publicaciones y Recursos</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Accede a nuestros informes, boletines, artículos científicos y recursos educativos sobre epidemiología y
            salud pública. Todas nuestras publicaciones están disponibles para su descarga gratuita.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm mb-10 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="flex-grow">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  className="block w-full p-3 pl-12 text-sm text-gray-900 border border-gray-200 rounded-full bg-gray-50 focus:ring-green-500 focus:border-green-500"
                  placeholder="Buscar publicaciones..."
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <select className="border border-gray-200 rounded-full px-4 py-3 text-sm bg-white focus:ring-green-500 focus:border-green-500">
                <option>Todos los tipos</option>
                <option>Informes técnicos</option>
                <option>Boletines epidemiológicos</option>
                <option>Artículos científicos</option>
                <option>Guías y manuales</option>
              </select>
              <select className="border border-gray-200 rounded-full px-4 py-3 text-sm bg-white focus:ring-green-500 focus:border-green-500">
                <option>Todas las fechas</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
              <button className="bg-green-100 text-green-700 px-4 py-3 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-green-200 transition-colors">
                <Filter className="h-4 w-4" />
                Filtrar
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition-all card-hover">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Portada del informe anual"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
                  Informe Anual
                </div>
                <h3 className="font-semibold text-lg mb-2">Estado Epidemiológico Nacional 2024</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Análisis completo de la situación epidemiológica del país durante el año 2024, incluyendo tendencias,
                  brotes y respuestas de salud pública.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Publicado: Marzo 2025</span>
                  <div className="flex space-x-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Descargar PDF"
                    >
                      <Download className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Ver en línea"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition-all card-hover">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Portada del boletín epidemiológico"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-3">
                  Boletín Epidemiológico
                </div>
                <h3 className="font-semibold text-lg mb-2">Boletín Epidemiológico Trimestral - Q1 2025</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Resumen de la situación epidemiológica del primer trimestre de 2025, con énfasis en enfermedades
                  respiratorias y vectoriales.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Publicado: Abril 2025</span>
                  <div className="flex space-x-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Descargar PDF"
                    >
                      <Download className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Ver en línea"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition-all card-hover">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Portada del artículo científico"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-3">
                  Artículo Científico
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Factores asociados a la resistencia antimicrobiana en infecciones hospitalarias
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Estudio multicéntrico sobre los factores de riesgo para el desarrollo de resistencia a antibióticos en
                  entornos hospitalarios.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Publicado: Febrero 2025</span>
                  <div className="flex space-x-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Descargar PDF"
                    >
                      <Download className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Ver en línea"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition-all card-hover">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Portada de la guía"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-3">
                  Guía Técnica
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Guía para la vigilancia epidemiológica de enfermedades transmitidas por vectores
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Manual técnico para profesionales de salud sobre métodos de vigilancia, diagnóstico y control de
                  enfermedades vectoriales.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Publicado: Enero 2025</span>
                  <div className="flex space-x-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Descargar PDF"
                    >
                      <Download className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Ver en línea"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition-all card-hover">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Portada del informe especial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-3">
                  Informe Especial
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Impacto del cambio climático en la distribución de enfermedades infecciosas
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Análisis de cómo los cambios en patrones climáticos están afectando la distribución geográfica de
                  enfermedades infecciosas en el país.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Publicado: Diciembre 2024</span>
                  <div className="flex space-x-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Descargar PDF"
                    >
                      <Download className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Ver en línea"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition-all card-hover">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Portada del material educativo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-3">
                  Material Educativo
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Fundamentos de epidemiología para profesionales de atención primaria
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Curso introductorio sobre conceptos básicos de epidemiología, vigilancia y respuesta a brotes para
                  personal de atención primaria.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Publicado: Noviembre 2024</span>
                  <div className="flex space-x-2">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Descargar PDF"
                    >
                      <Download className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      title="Ver en línea"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <nav aria-label="Paginación" className="inline-flex rounded-full bg-gray-50 shadow-sm p-1">
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

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-sm animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="md:w-3/4 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-3 gradient-text">¿Necesitas una publicación específica?</h2>
              <p className="text-gray-700 mb-6">
                Si estás buscando información específica que no encuentras en nuestras publicaciones disponibles,
                nuestro equipo puede ayudarte. Contamos con un archivo histórico de datos epidemiológicos y podemos
                preparar informes personalizados según tus necesidades.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
              >
                Solicitar información <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
