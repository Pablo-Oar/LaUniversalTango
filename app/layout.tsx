import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";
import MusicGroupSchema from "@/components/seo/MusicGroupSchema";

/* ─────────────────────────────────────────────────────────────
   Tipografía — Playfair Display (títulos) + Inter (cuerpo)
   Según PaletaColoresYEstilos.txt
   ───────────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* ─────────────────────────────────────────────────────────────
   Metadata global del sitio
   ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.launiversaltango.com"),
  title: {
    default: "La Universal Tango | Grupo Musical de Tango Profesional",
    template: "%s | La Universal Tango",
  },
  description:
    "Grupo musical profesional de tango. Conciertos en vivo, giras internacionales. Música auténtica de Buenos Aires.",
  keywords: [
    "tango",
    "grupo tango",
    "conciertos tango",
    "música tango",
    "tango argentino",
    "grupo musical",
  ],
  authors: [{ name: "La Universal Tango" }],
  creator: "La Universal Tango",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "La Universal Tango",
    title: "La Universal Tango - Conciertos de Tango en Vivo",
    description:
      "Grupo musical profesional. Presentaciones en festivales internacionales.",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Universal Tango",
    description: "Conciertos profesionales de tango argentino",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─────────────────────────────────────────────────────────────
   Root Layout
   ───────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full`}
      style={{ backgroundColor: "#050A2E" }}
    >
      <body className="min-h-full flex flex-col antialiased">
        <MusicGroupSchema />
        <ScrollToTop />
        <Navbar />
        <div style={{ paddingTop: "70px" }} className="flex-1">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
