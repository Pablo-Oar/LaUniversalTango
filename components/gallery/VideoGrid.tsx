"use client"

import { useEffect, useRef, useState } from "react"
import { GALLERY_VIDEOS } from "@/data/gallery"
import { withBasePath } from "@/lib/basePath"
import { registerMedia, notifyPlaying } from "@/lib/mediaSync"

// Videos que se muestran en "Videos Destacados" (los marcados hideFromFeatured
// solo aparecen en la grilla filtrable de "Imágenes Destacadas")
const FEATURED_VIDEOS = GALLERY_VIDEOS.filter((v) => !v.hideFromFeatured)

/* ─────────────────────────────────────────────────────────────
   VIDEO GRID — Videos de "Videos Destacados" en /galeria.
   Se reproducen de forma exclusiva: al arrancar uno, se pausan
   los demás (locales, de YouTube, y cualquier otro reproductor
   de la página registrado en lib/mediaSync).
   ───────────────────────────────────────────────────────────── */
export default function VideoGrid() {
  const [origin, setOrigin] = useState("")
  const mediaRefs = useRef<Record<string, HTMLVideoElement | HTMLIFrameElement | null>>({})

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  // Registra cada reproductor en el coordinador compartido de la página
  useEffect(() => {
    const unregisters = FEATURED_VIDEOS.map((video) =>
      registerMedia(`video-grid-${video.id}`, () => {
        const el = mediaRefs.current[video.id]
        if (!el) return
        if (el instanceof HTMLVideoElement) {
          el.pause()
        } else {
          el.contentWindow?.postMessage(JSON.stringify({ event: "command", func: "pauseVideo", args: [] }), "*")
        }
      })
    )
    return () => unregisters.forEach((u) => u())
  }, [])

  // Detecta cuándo un video de YouTube arranca a reproducirse (vía su API postMessage)
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://www.youtube.com") return
      let data: { event?: string; info?: { playerState?: number } }
      try {
        data = JSON.parse(e.data)
      } catch {
        return
      }
      if (data.event !== "infoDelivery" || data.info?.playerState !== 1) return

      const video = FEATURED_VIDEOS.find(
        (v) => mediaRefs.current[v.id] instanceof HTMLIFrameElement && (mediaRefs.current[v.id] as HTMLIFrameElement).contentWindow === e.source
      )
      if (video) notifyPlaying(`video-grid-${video.id}`)
    }

    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [])

  if (FEATURED_VIDEOS.length === 0) {
    return <p style={{ color: "#D5D9F0" }}>Próximamente: videos de presentaciones.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {FEATURED_VIDEOS.map((video) => (
        <div key={video.id} id={`video-${video.id}`} className="scroll-mt-[90px]">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4" style={{ backgroundColor: "#1C2D78" }}>
            {video.localSrc ? (
              <video
                ref={(el) => { mediaRefs.current[video.id] = el }}
                controls
                poster={video.poster ? withBasePath(video.poster) : undefined}
                className="absolute inset-0 w-full h-full object-cover"
                onPlay={() => notifyPlaying(`video-grid-${video.id}`)}
              >
                <source src={withBasePath(video.localSrc)} type="video/mp4" />
              </video>
            ) : (
              <iframe
                ref={(el) => { mediaRefs.current[video.id] = el }}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?enablejsapi=1${origin ? `&origin=${encodeURIComponent(origin)}` : ""}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <h3 className="h3-display text-lg mb-1">{video.title}</h3>
          <p className="text-sm" style={{ color: "#D5D9F0" }}>{video.description}</p>
        </div>
      ))}
    </div>
  )
}
