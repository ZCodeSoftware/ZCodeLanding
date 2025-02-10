import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton"; // Importa el componente

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZCode Software Factory",
  description:
    "En ZCode, transformamos tus ideas en soluciones digitales innovadoras. Desde Córdoba, desarrollamos software a medida que impulsa tu negocio hacia el futuro. Nuestro equipo de expertos está comprometido con la excelencia, asegurando que cada proyecto se entregue con la más alta calidad y precisión. Confía en nosotros para llevar tu visión a la realidad, con tecnología de vanguardia y un enfoque centrado en el cliente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/zcodelogo.jpeg" sizes="any" />
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
