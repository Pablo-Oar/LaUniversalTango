"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { GALLERY_PHOTOS, GALLERY_VIDEOS, GalleryCategory } from "@/data/gallery"
import Lightbox from "@/components/gallery/Lightbox"
import { withBasePath } from "@/lib/basePath"
import { registerMedia, notifyPlaying } from "@/lib/mediaSync"

const CATEGORIES: { key: GalleryCategory | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "conciertos", label: "Conciertos" },
  { key: "giras", label: "Giras Internacionales" },
  { key: "festivales", label: "Festivales" },
]

const PER_PAGE_DESKTOP = 12
const PER_PAGE_MOBILE = 8
const DESKTOP_BREAKPOINT = "(min-width: 1024px)" // debe coincidir con el breakpoint `lg` de Tailwind

// Videos que también se muestran como tile en la grilla filtrable (los que tienen category cargada)
const GRID_VIDEOS = GALLERY_VIDEOS.filter((v) => v.category)

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "todos">("todos")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(PER_PAGE_MOBILE)

  // Detecta desktop vs mobile para elegir cuántas tiles mostrar por página
  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_BREAKPOINT)
    const update = () => setPerPage(mql.matches ? PER_PAGE_DESKTOP : PER_PAGE_MOBILE)
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])

  // Mientras haya un video reproduciéndose acá, se registra en el coordinador
  // compartido para que se pause si arranca otro video en cualquier parte de la página.
  useEffect(() => {
    if (!playingVideoId) return
    return registerMedia(`gallery-grid-${playingVideoId}`, () => setPlayingVideoId(null))
  }, [playingVideoId])

  const photos =
    filter === "todos"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === filter)

  const videos =
    filter === "todos"
      ? GRID_VIDEOS
      : GRID_VIDEOS.filter((v) => v.category === filter)

  const isEmpty = photos.length === 0 && videos.length === 0

  // Tiles combinadas (fotos + videos) en el orden que se renderizan, conservando
  // el índice real de cada foto dentro de `photos` para que el Lightbox navegue bien.
  type Tile =
    | { type: "photo"; index: number; photo: (typeof GALLERY_PHOTOS)[number] }
    | { type: "video"; video: (typeof GRID_VIDEOS)[number] }

  const tiles: Tile[] = [
    ...photos.map((photo, index): Tile => ({ type: "photo", index, photo })),
    ...videos.map((video): Tile => ({ type: "video", video })),
  ]

  const totalPages = Math.max(1, Math.ceil(tiles.length / perPage))
  const safePage = Math.min(page, totalPages)
  const pageTiles = tiles.slice((safePage - 1) * perPage, safePage * perPage)

  function changeFilter(key: GalleryCategory | "todos") {
    setFilter(key)
    setLightboxIndex(null)
    setPlayingVideoId(null)
    setPage(1)
  }

  function goToPage(n: number) {
    setPage(n)
    if (typeof window !== "undefined") {
      document.getElementById("galeria-grid-top")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div>
      <div id="galeria-grid-top" className="scroll-mt-[90px] flex flex-wrap gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => changeFilter(cat.key)}
            className={`chip-filter px-5 py-2 text-sm rounded-full ${filter === cat.key ? "is-active" : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {isEmpty ? (
        <p style={{ color: "#D5D9F0" }}>Próximamente: fotos en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pageTiles.map((tile) => {
            if (tile.type === "photo") {
              const { photo, index } = tile
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
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
              )
            }

            const video = tile.video
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
                onClick={() => {
                  notifyPlaying(`gallery-grid-${video.id}`)
                  setPlayingVideoId(video.id)
                }}
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

      {!isEmpty && totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            type="button"
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            className="btn-outline text-sm px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Anterior
          </button>
          <span className="text-sm" style={{ color: "#D5D9F0" }}>
            Página {safePage} de {totalPages}
          </span>
          <button
            type="button"
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            className="btn-outline text-sm px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Siguiente →
          </button>
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
