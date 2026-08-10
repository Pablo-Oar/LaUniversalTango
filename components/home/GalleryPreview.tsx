"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { GALLERY_PHOTOS } from "@/data/gallery"
import Lightbox from "@/components/gallery/Lightbox"
import { withBasePath } from "@/lib/basePath"

export default function GalleryPreview() {
  const photos = GALLERY_PHOTOS.slice(0, 5)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section
      className="section-py"
      style={{
        backgroundColor: "#04061A",
        borderTop: "2px solid rgba(255,255,255,0.5)",
        boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <div className="site-container text-center">
        <h2 className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#F2F3FF" }}>
          Galería
        </h2>
        <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: "#B8B0F8" }} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Ver imagen: ${photo.title}`}
              className="relative aspect-4/5 overflow-hidden rounded-lg cursor-zoom-in group"
              style={{ backgroundColor: "#1C2D78", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <Image
                src={withBasePath(photo.src)}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <Link href="/galeria" className="btn-outline">Ver Todas las Fotos</Link>
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
