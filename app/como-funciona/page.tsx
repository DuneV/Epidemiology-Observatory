import Link from "next/link"
import { Activity, Database, LineChart, Users, Server, Share2, ArrowRight } from "lucide-react"

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              ¿Cómo funciona el Observatorio Epidemiológico?
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              El Observatorio Epidemiológico Nacional (OEN) es una plataforma integral de vigilancia, análisis y
              difusión de información sobre la situación de salud pública en el país. Conoce cómo funciona nuestro
              sistema y cómo contribuye a la toma de decisiones en salud.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center gradient-text">
              Proceso de trabajo del OEN
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-md">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Recolección de datos</h3>
                <p className="text-gray-600">
                  Recopilamos datos de múltiples fuentes: hospitales, centros de salud, laboratorios, registros civiles
                  y encuestas poblacionales.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-md">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Procesamiento y validación</h3>
                <p className="text-gray-600">
                  Los datos son procesados, depurados y validados mediante protocolos estandarizados para garantizar su
                  calidad y confiabilidad.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-md">
                  <LineChart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Análisis y visualización</h3>
                <p className="text-gray-600">
                  Aplicamos métodos estadísticos y epidemiológicos para analizar tendencias, patrones y factores de
                  riesgo, generando visualizaciones interactivas.
                </p>
              </div>
            </div>

            <div className="flex justify-center my-8">
              <div className="w-1 h-16 bg-gradient-to-b from-green-300 to-green-500"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-md">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Detección de alertas</h3>
                <p className="text-gray-600">
                  Nuestros algoritmos identifican anomalías y patrones inusuales que pueden indicar brotes o emergencias
                  de salud pública.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-md">
                  <Share2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">5. Difusión de información</h3>
                <p className="text-gray-600">
                  Publicamos informes, boletines y actualizaciones periódicas para mantener informados a los tomadores
                  de decisiones y al público.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-md">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">6. Apoyo a la toma de decisiones</h3>
                <p className="text-gray-600">
                  Proporcionamos evidencia científica para orientar políticas públicas, intervenciones y asignación de
                  recursos en salud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center gradient-text">
              Nuestras herramientas y metodologías
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all card-hover">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Sistema de Vigilancia Epidemiológica</h3>
                <p className="text-gray-600 mb-6">
                  Nuestra plataforma integra datos de vigilancia pasiva (notificación de casos) y activa (búsqueda
                  sistemática) para monitorear continuamente la situación epidemiológica.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="ml-2 text-gray-600">Vigilancia basada en indicadores</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="ml-2 text-gray-600">Vigilancia basada en eventos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="ml-2 text-gray-600">Vigilancia sindrómica</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="ml-2 text-gray-600">Vigilancia molecular y genómica</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all card-hover">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Análisis de Datos Avanzado</h3>
                <p className="text-gray-600 mb-6">
                  Empleamos técnicas estadísticas y de ciencia de datos para extraer información valiosa y generar
                  conocimiento a partir de los datos epidemiológicos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="ml-2 text-gray-600">Modelos predictivos y de pronóstico</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="ml-2 text-gray-600">Análisis espacial y georreferenciación</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="ml-2 text-gray-600">Análisis de series temporales</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="ml-2 text-gray-600">Inteligencia artificial para detección de patrones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Quieres conocer más sobre nuestro trabajo?</h2>
            <p className="text-lg mb-8">
              Ofrecemos capacitaciones, webinars y materiales educativos para profesionales de la salud, investigadores
              y público interesado en epidemiología y salud pública.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Solicitar una demostración <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link
                href="#"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-all inline-flex items-center justify-center"
              >
                Descargar recursos <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
