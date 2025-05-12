import Link from "next/link"
import { BarChart2, TrendingUp, Map, AlertTriangle, Filter, ArrowRight } from "lucide-react"

export default function IndicadoresPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Indicadores y Tendencias Epidemiológicas
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore los principales indicadores de salud pública y las tendencias epidemiológicas actuales. Nuestra
            plataforma ofrece datos actualizados y análisis detallados para la toma de decisiones informadas.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm mb-10 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <h2 className="text-xl font-semibold">Filtrar indicadores</h2>
            <div className="flex flex-wrap gap-3">
              <select className="border rounded-full px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Todas las regiones</option>
                <option>Norte</option>
                <option>Sur</option>
                <option>Este</option>
                <option>Oeste</option>
                <option>Centro</option>
              </select>
              <select className="border rounded-full px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Todas las enfermedades</option>
                <option>Enfermedades infecciosas</option>
                <option>Enfermedades crónicas</option>
                <option>Enfermedades transmisibles</option>
                <option>Salud materno-infantil</option>
              </select>
              <select className="border rounded-full px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Último año</option>
                <option>Últimos 5 años</option>
                <option>Últimos 10 años</option>
                <option>Histórico completo</option>
              </select>
              <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-green-200 transition-colors">
                <Filter className="h-4 w-4" />
                Aplicar filtros
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6 hover:shadow-lg transition-all card-hover">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Incidencia de COVID-19</h3>
                <TrendingUp className="h-5 w-5 text-red-500" />
              </div>
              <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">Gráfico de tendencia</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Casos por 100,000 habitantes en los últimos 30 días, por región.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-700"
              >
                Ver detalles <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-lg transition-all card-hover">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Cobertura de vacunación</h3>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">Gráfico de barras</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Porcentaje de población vacunada por tipo de vacuna y grupo etario.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-700"
              >
                Ver detalles <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-lg transition-all card-hover">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Dengue y enfermedades vectoriales</h3>
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">Mapa de calor</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Distribución geográfica de casos confirmados en el último trimestre.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-700"
              >
                Ver detalles <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-lg transition-all card-hover">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Mortalidad infantil</h3>
                <TrendingUp className="h-5 w-5 text-green-500 rotate-180" />
              </div>
              <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">Gráfico de línea</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Tasa de mortalidad infantil por cada 1,000 nacidos vivos, evolución histórica.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-700"
              >
                Ver detalles <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-lg transition-all card-hover">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Enfermedades crónicas</h3>
                <Map className="h-5 w-5 text-blue-500" />
              </div>
              <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">Gráfico de distribución</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Prevalencia de diabetes, hipertensión y obesidad por región y grupo etario.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-700"
              >
                Ver detalles <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-lg transition-all card-hover">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Resistencia antimicrobiana</h3>
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              </div>
              <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">Gráfico de tendencia</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Evolución de la resistencia a antibióticos en patógenos prioritarios.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-700"
              >
                Ver detalles <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6">Informes Especiales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6 hover:shadow-lg transition-all card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <BarChart2 className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold">Análisis de la temporada de influenza 2023-2024</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Informe completo sobre la circulación de virus respiratorios, impacto en la población y efectividad de
                las medidas preventivas.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-700"
              >
                Descargar informe (PDF) <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="border rounded-2xl p-6 hover:shadow-lg transition-all card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <BarChart2 className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold">Impacto de los determinantes sociales en la salud pública</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Estudio sobre cómo los factores socioeconómicos influyen en los indicadores de salud a nivel nacional.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-700"
              >
                Descargar informe (PDF) <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
