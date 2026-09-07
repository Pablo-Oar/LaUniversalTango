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
  const [pressedId, setPressedId] = useState<string | null>(null)

  return (
    <section
      className="section-py"
      style={{
        backgroundColor: "#04061A",
        borderTop: "2px solid #B4A9A7",
        boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <div className="site-container text-center">
        <div className="inline-block text-left mb-8">
          <h2 className="text-xl font-bold tracking-tight uppercase mb-1" style={{ color: "#FFFFFF" }}>
            Galería
          </h2>
          <div className="w-8 h-px" style={{ backgroundColor: "#FFFFFF" }} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              onTouchStart={() => {
                setPressedId(photo.id)
                window.setTimeout(() => setPressedId((current) => (current === photo.id ? null : current)), 400)
              }}
              aria-label={`Ver imagen: ${photo.title}`}
              className={`relative aspect-4/5 overflow-hidden cursor-zoom-in group hover:shadow-[0_0_24px_8px_rgba(107,91,232,0.45)] transition-shadow ${
                pressedId === photo.id ? "shadow-[0_0_24px_8px_rgba(107,91,232,0.45)] duration-0" : "duration-300"
              } ${i === 4 ? "hidden sm:block" : ""}`}
              style={{ backgroundColor: "#1C2D78", border: "0.5px solid #FFFFFF" }}
            >
              <Image
                src={withBasePath(photo.src)}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                  pressedId === photo.id ? "scale-105" : ""
                }`}
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
