import Image from "next/image"
import Link from "next/link"
import { MapPin, Activity, BarChart2, Clock, FileText, Phone, Users, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="relative h-full">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Mapa epidemiológico"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6 animate-fade-in">
            Observatorio Epidemiológico Nacional
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mb-8 animate-slide-up">
            Monitoreo, análisis y difusión de información epidemiológica para la toma de decisiones en salud pública
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Link
              href="/indicadores"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Explorar indicadores
            </Link>
            <Link
              href="/como-funciona"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-full text-lg font-medium transition-all"
            >
              ¿Cómo funciona?
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Sobre el OEN</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              El Observatorio Epidemiológico Nacional (OEN) es una plataforma que recopila y analiza información
              histórica de más de un centenar de indicadores de salud pública de todas las regiones del país. El equipo
              del OEN no sólo integra y depura los datos generados por diversas instituciones, sino que también
              desarrolla metodologías para el análisis de tendencias epidemiológicas.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-md">
                  <BarChart2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Monitoreo de Indicadores</h3>
                <p className="text-gray-600 text-center">
                  Seguimiento continuo de indicadores epidemiológicos clave en todas las regiones del país.
                </p>
              </div>

              <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-md">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mapeo Geográfico</h3>
                <p className="text-gray-600 text-center">
                  Visualización geoespacial de brotes, tendencias y patrones epidemiológicos.
                </p>
              </div>

              <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-md">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Alertas Tempranas</h3>
                <p className="text-gray-600 text-center">
                  Sistema de detección y notificación de anomalías en patrones de salud pública.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 gradient-text">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all card-hover">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Informes Epidemiológicos</h3>
              <p className="text-gray-600 mb-4">
                Publicaciones periódicas con análisis detallados de la situación epidemiológica nacional.
              </p>
              <Link
                href="/publicaciones"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
              >
                Ver informes <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all card-hover">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-6">
                <BarChart2 className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Análisis de Tendencias</h3>
              <p className="text-gray-600 mb-4">Estudios de evolución temporal de enfermedades y factores de riesgo.</p>
              <Link
                href="/indicadores"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
              >
                Explorar tendencias <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all card-hover">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Capacitación</h3>
              <p className="text-gray-600 mb-4">
                Formación para profesionales de salud en vigilancia epidemiológica y análisis de datos.
              </p>
              <Link href="#" className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                Ver programas <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all card-hover">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-6">
                <Phone className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultoría</h3>
              <p className="text-gray-600 mb-4">
                Asesoramiento especializado para instituciones públicas y privadas en materia de salud pública.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
              >
                Contactar <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Datos que salvan vidas</h2>
            <div className="w-20 h-1 bg-white/30 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl mb-12">
              Nuestro trabajo proporciona información crucial para la toma de decisiones en salud pública
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                <p className="text-white/80">Indicadores monitoreados</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">32</div>
                <p className="text-white/80">Regiones cubiertas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <p className="text-white/80">Años de datos históricos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <p className="text-white/80">Monitoreo continuo</p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/como-funciona"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl inline-block"
              >
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 gradient-text">¿Necesitas información específica?</h2>
                <p className="text-gray-700 mb-6">
                  Nuestro equipo está disponible para ayudarte con consultas específicas sobre datos epidemiológicos,
                  tendencias de salud pública o cualquier otra información relacionada con nuestro observatorio.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg"
                >
                  Contactar ahora <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full opacity-40"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-green-600 to-emerald-800 rounded-full opacity-60 flex items-center justify-center">
                    <Activity className="h-20 w-20 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
