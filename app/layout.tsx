import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Observatorio Epidemiológico Nacional",
  description: "Plataforma de monitoreo y análisis de indicadores de salud pública",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <MainNav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
