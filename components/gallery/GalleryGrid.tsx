"use client"

import Image from "next/image"
import { useState } from "react"
import { GALLERY_PHOTOS, GALLERY_VIDEOS, GalleryCategory } from "@/data/gallery"
import Lightbox from "@/components/gallery/Lightbox"
import { withBasePath } from "@/lib/basePath"

const CATEGORIES: { key: GalleryCategory | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "conciertos", label: "Conciertos" },
  { key: "giras", label: "Giras Internacionales" },
  { key: "festivales", label: "Festivales" },
]

// Videos que también se muestran como tile en la grilla filtrable (los que tienen category cargada)
const GRID_VIDEOS = GALLERY_VIDEOS.filter((v) => v.category)

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "todos">("todos")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)

  const photos =
    filter === "todos"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === filter)

  const videos =
    filter === "todos"
      ? []
      : GRID_VIDEOS.filter((v) => v.category === filter)

  const isEmpty = photos.length === 0 && videos.length === 0

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setFilter(cat.key)
              setLightboxIndex(null)
              setPlayingVideoId(null)
            }}
            className="px-5 py-2 text-sm rounded-full transition-colors"
            style={{
              backgroundColor: filter === cat.key ? "#6B5BE8" : "transparent",
              color: filter === cat.key ? "#FFFFFF" : "#D5D9F0",
              border: "1px solid rgba(184,176,248,0.3)",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {isEmpty ? (
        <p style={{ color: "#D5D9F0" }}>Próximamente: fotos en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Ver imagen: ${photo.title}`}
              className="relative aspect-square overflow-hidden rounded-lg cursor-zoom-in group"
              style={{ backgroundColor: "#1C2D78" }}
            >
              <Image
                src={withBasePath(photo.src)}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}

          {videos.map((video) => {
            const isPlaying = playingVideoId === video.id

            if (isPlaying) {
              return (
                <div
                  key={video.id}
                  className="relative aspect-square overflow-hidden rounded-lg"
                  style={{ backgroundColor: "#000000" }}
                >
                  <video
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full object-contain"
                  >
                    <source src={withBasePath(video.localSrc ?? "")} type="video/mp4" />
                  </video>
                </div>
              )
            }

            return (
              <button
                key={video.id}
                type="button"
                onClick={() => setPlayingVideoId(video.id)}
                aria-label={`Reproducir video: ${video.title}`}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                style={{ backgroundColor: "#1C2D78" }}
              >
                <Image
                  src={withBasePath(video.poster ?? "")}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-[2px]"
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(5,10,46,0.35)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)" }}
                  >
                    <span style={{ color: "#FFFFFF", fontSize: "18px", marginLeft: "2px" }}>▶</span>
                  </div>
                </div>
                <p
                  className="absolute bottom-0 left-0 right-0 text-xs font-semibold px-3 py-2 truncate text-left"
                  style={{ color: "#FFFFFF", background: "linear-gradient(0deg, rgba(5,10,46,0.85), transparent)" }}
                >
                  {video.title}
                </p>
              </button>
            )
          })}
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))}
          onNext={() => setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length))}
        />
      )}
    </div>
  )
}
