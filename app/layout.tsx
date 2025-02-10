import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZCode Software Factory",
  description:
    "En ZCode, transformamos tus ideas en soluciones digitales innovadoras. Desarrollamos software a medida que impulsa tu negocio hacia el futuro. Nuestro equipo de expertos está comprometido con la excelencia, asegurando que cada proyecto se entregue con la más alta calidad y precisión. Confía en nosotros para llevar tu visión a la realidad, con tecnología de vanguardia y un enfoque centrado en el cliente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/zcodelogo.jpg" sizes="any" />
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LP693F29MQ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LP693F29MQ');
          `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            {children}
            <WhatsappButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
