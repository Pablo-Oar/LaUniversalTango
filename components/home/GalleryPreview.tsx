"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { GALLERY_PHOTOS } from "@/data/gallery"
import Lightbox from "@/components/gallery/Lightbox"
import { withBasePath } from "@/lib/basePath"

export default function GalleryPreview() {
  const photos = GALLERY_PHOTOS.slice(0, 8)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
      <div className="site-container">
        <h2 className="h2-display mb-2">Momentos en Escena</h2>
        <p className="mb-10" style={{ color: "#D5D9F0" }}>Presentaciones y conciertos</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

        <div className="mt-10">
          <Link href="/galeria" className="btn-outline">Ver galería completa</Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))}
          onNext={() => setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length))}
        />
      )}
    </section>
  )
}
