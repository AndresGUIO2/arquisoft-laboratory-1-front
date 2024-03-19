//Un layout para configurar globalmente la aplicación web.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configura la fuente Inter especificando los subconjuntos de caracteres, en este caso, 'latin'.
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SITAS",
  description: "SITAS",
};

/**
 * Componente RootLayout que define la estructura básica de la página.
 *
 * Este componente es un layout raíz que se aplicará a todas las páginas del sitio web.
 * Incluye la fuente Inter y define el idioma de la página como español de España (es-ES).
 *
 * @param {React.ReactNode} children - Los componentes hijos que se renderizarán dentro de este layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
