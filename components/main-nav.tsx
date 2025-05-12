"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "OEN", path: "/" },
  { name: "Indicadores y tendencias", path: "/indicadores" },
  { name: "¿Cómo funciona?", path: "/como-funciona" },
  { name: "Actualizaciones", path: "/actualizaciones" },
  { name: "Publicaciones", path: "/publicaciones" },
  { name: "Contacto", path: "/contacto" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-md">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div className="font-bold text-gray-800">
              <span className="block text-sm md:text-base">OBSERVATORIO</span>
              <span className="block text-sm md:text-base">EPIDEMIOLÓGICO</span>
              <span className="block text-xs text-gray-500">NACIONAL</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-full transition-colors",
                  pathname === item.path
                    ? "bg-green-50 text-green-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-green-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              ACCESO
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="hidden peer" />
      <label htmlFor="mobile-menu" className="relative z-50 block w-7 h-5 cursor-pointer flex flex-col justify-between">
        <span className="bg-gray-600 block h-0.5 w-7 rounded-sm transition-all peer-checked:translate-y-2 peer-checked:rotate-45"></span>
        <span className="bg-gray-600 block h-0.5 w-7 rounded-sm transition-all peer-checked:opacity-0"></span>
        <span className="bg-gray-600 block h-0.5 w-7 rounded-sm transition-all peer-checked:-translate-y-2 peer-checked:-rotate-45"></span>
      </label>

      <div className="fixed inset-0 z-40 translate-x-full bg-white transition-transform peer-checked:translate-x-0">
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === item.path ? "text-green-600" : "text-gray-600 hover:text-green-600",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#"
              className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-lg font-medium"
            >
              ACCESO
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
