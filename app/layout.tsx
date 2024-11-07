import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton"; // Importa el componente

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mudanzas en Córdoba con Mudanzas I-Z",
  description: "Mudanzas De Cordoba a Todo el Pais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsappButton /> 
        </ThemeProvider>
      </body>
    </html>
  );
}