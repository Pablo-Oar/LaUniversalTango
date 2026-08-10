"use client"

import Image from "next/image"
import { useState } from "react"
import { GALLERY_PHOTOS, GalleryCategory } from "@/data/gallery"
import Lightbox from "@/components/gallery/Lightbox"
import { withBasePath } from "@/lib/basePath"

const CATEGORIES: { key: GalleryCategory | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "conciertos", label: "Conciertos" },
  { key: "giras", label: "Giras Internacionales" },
  { key: "festivales", label: "Festivales" },
]

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "todos">("todos")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const photos =
    filter === "todos"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setFilter(cat.key)
              setLightboxIndex(null)
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

      {photos.length === 0 ? (
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
