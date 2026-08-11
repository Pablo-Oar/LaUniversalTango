import Image from "next/image"
import { GALLERY_VIDEOS } from "@/data/gallery"
import { CONTACT } from "@/data/contact"
import { withBasePath } from "@/lib/basePath"

// Placeholders visuales hasta tener videos reales embebidos (data/gallery.ts → GALLERY_VIDEOS)
const PLACEHOLDER_VIDEOS = [
  { id: "ph-1", title: "Video Próximamente", thumb: "/images/gallery/grupo-color-1.jpg" },
  { id: "ph-2", title: "Video Próximamente", thumb: "/images/gallery/loca-tour-2025.png" },
  { id: "ph-3", title: "Video Próximamente", thumb: "/images/hero/grupo-principal.jpg" },
]

/* ─────────────────────────────────────────────────────────────
   VIDEO SECTION — Video destacado + lista + cita de marca.
   Estructura y colores tomados del mockup oficial (EstructuraWeb.png).
   ───────────────────────────────────────────────────────────── */
export default function VideoSection() {
  const featured = GALLERY_VIDEOS[0]
  const rest = GALLERY_VIDEOS.slice(1, 4)

  return (
    <section
      className="section-py"
      style={{
        backgroundColor: "#2B2163",
        borderTop: "2px solid #B4A9A7",
        boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Video destacado */}
        <div className="lg:col-span-6">
          {featured ? (
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${featured.youtubeId}`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <a
              href={CONTACT.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-video rounded-lg overflow-hidden block group"
            >
              <Image
                src={withBasePath("/images/hero/grupo-principal.jpg")}
                alt="La Universal Tango en video"
                fill
                sizes="45vw"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(5,10,46,0.55)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)" }}
                >
                  <span style={{ color: "#FFFFFF", fontSize: "24px", marginLeft: "3px" }}>▶</span>
                </div>
              </div>

              {/* Barra de controles decorativa (visual, no funcional aún) */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-3">
                <span style={{ color: "#FFFFFF", fontSize: "12px" }}>0:00 / 3:45</span>
                <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
                  <div className="h-1 rounded-full" style={{ width: "0%", backgroundColor: "#FFFFFF" }} />
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M3 10v4h4l5 5V5L7 10H3Zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4Z" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M7 14H5v5h5v-2H7v-3ZM5 10h2V7h3V5H5v5Zm12 7h-3v2h5v-5h-2v3ZM14 5v2h3v3h2V5h-5Z" /></svg>
              </div>
            </a>
          )}
        </div>

        {/* Lista de videos */}
        <div className="lg:col-span-3">
          <h2 className="text-xl font-bold tracking-tight uppercase mb-1" style={{ color: "#FFFFFF" }}>
            Videos
          </h2>
          <div className="w-8 h-px mb-6" style={{ backgroundColor: "#FFFFFF" }} />
          <ul className="space-y-4">
            {(rest.length > 0 ? rest : PLACEHOLDER_VIDEOS).map((video) => {
              const isReal = "youtubeId" in video
              const thumbSrc = isReal
                ? `https://img.youtube.com/vi/${(video as typeof GALLERY_VIDEOS[number]).youtubeId}/mqdefault.jpg`
                : withBasePath((video as typeof PLACEHOLDER_VIDEOS[number]).thumb)
              const href = isReal
                ? `https://www.youtube.com/watch?v=${(video as typeof GALLERY_VIDEOS[number]).youtubeId}`
                : CONTACT.social.youtube

              return (
                <li key={video.id} className="flex items-center gap-3">
                  <div className="relative w-24 h-18 rounded overflow-hidden shrink-0" style={{ backgroundColor: "#050A2E" }}>
                    <Image
                      src={thumbSrc}
                      alt={video.title}
                      fill
                      sizes="96px"
                      className="object-cover"
                      unoptimized={isReal}
                    />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(5,10,46,0.35)" }}>
                      <span style={{ color: "#FFFFFF", fontSize: "14px" }}>▶</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: "#FFFFFF" }}>{video.title}</p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs"
                      style={{ color: "#B8B0F8" }}
                    >
                      Ver más
                    </a>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Cita de marca */}
        <blockquote
          className="lg:col-span-3 lg:pl-6 italic"
          style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "#F2F3FF", lineHeight: 1.5 }}
        >
          El tango
          <br />
          es más que música,
          <br />
          es un sentimiento
          <br />
          que nos une.
          <svg
            width="40"
            height="16"
            viewBox="0 0 40 16"
            fill="none"
            className="mt-4 block"
            aria-hidden="true"
          >
            <path
              d="M1 8c3-6 6-6 9 0s6 6 9 0 6-6 9 0 6 6 9 0"
              stroke="#B8B0F8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </blockquote>
      </div>
    </section>
  )
}
