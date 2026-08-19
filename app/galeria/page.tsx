import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery/GalleryGrid"
import VideoGrid from "@/components/gallery/VideoGrid"

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotos y videos de conciertos, giras internacionales y festivales de La Universal Tango.",
}

export default function GaleriaPage() {
  return (
    <>
      <section className="bg-gradient-official section-py">
        <div className="site-container max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "#B8B0F8" }}>
            Galería
          </p>
          <h1 className="h1-display mb-4">Momentos en Escena</h1>
          <p style={{ color: "#D5D9F0" }}>
            Fotos y videos de nuestras presentaciones, giras y festivales.
          </p>
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
        <div className="site-container">
          <h2 className="h2-display mb-10">Imágenes Destacadas</h2>
          <GalleryGrid />
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: "#050A2E" }}>
        <div className="site-container">
          <h2 className="h2-display mb-10">Videos Destacados</h2>
          <VideoGrid />
        </div>
      </section>
    </>
  )
}
