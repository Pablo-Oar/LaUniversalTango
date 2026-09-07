import type { Metadata } from "next"
import Image from "next/image"
import GalleryGrid from "@/components/gallery/GalleryGrid"
import VideoGrid from "@/components/gallery/VideoGrid"
import { CONTACT } from "@/data/contact"
import { withBasePath } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotos y videos de conciertos, giras internacionales y festivales de La Universal Tango.",
}

export default function GaleriaPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[45vh] lg:aspect-1920/1322 flex items-end">
        <Image
          src={withBasePath("/images/gallery/universal.jpg")}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(5,10,46,0.85) 0%, rgba(5,10,46,0.6) 40%, rgba(11,27,90,0.3) 100%)",
          }}
        />
        <div className="site-container relative z-10 max-w-2xl pb-4">
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
          <div className="text-center mt-12">
            <a
              href={CONTACT.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4c-1 .2-1.8 1-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8c.2 1 1 1.8 2 2 1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
              </svg>
              Ver Más Videos
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
