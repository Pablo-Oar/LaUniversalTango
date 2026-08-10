"use client"

import Image from "next/image"
import { useEffect } from "react"

export type LightboxItem = {
  src: string
  title: string
  description?: string
}

type Props = {
  items: LightboxItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

/* ─────────────────────────────────────────────────────────────
   LIGHTBOX — Modal reutilizable para ver imágenes en grande.
   Usado en /galeria y en las vistas previas de galería del Home.
   ───────────────────────────────────────────────────────────── */
export default function Lightbox({ items, index, onClose, onPrev, onNext }: Props) {
  const active = items[index]

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }

    window.addEventListener("keydown", onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose, onPrev, onNext])

  if (!active) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "rgba(5, 10, 46, 0.95)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={active.title}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 flex items-center justify-center w-10 h-10 rounded-full text-2xl leading-none"
        style={{ color: "#FFFFFF", border: "1px solid rgba(184,176,248,0.3)" }}
      >
        ×
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="Imagen anterior"
            className="absolute left-2 sm:left-6 flex items-center justify-center w-11 h-11 rounded-full text-2xl"
            style={{ color: "#FFFFFF", border: "1px solid rgba(184,176,248,0.3)" }}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Siguiente imagen"
            className="absolute right-2 sm:right-6 flex items-center justify-center w-11 h-11 rounded-full text-2xl"
            style={{ color: "#FFFFFF", border: "1px solid rgba(184,176,248,0.3)" }}
          >
            ›
          </button>
        </>
      )}

      <div
        className="relative w-full max-w-5xl max-h-[80vh] aspect-[4/3]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={active.src}
          alt={active.title}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {(active.title || active.description) && (
        <div
          className="absolute bottom-5 left-0 right-0 text-center px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>{active.title}</p>
          {active.description && (
            <p className="text-xs mt-1" style={{ color: "#B8B0F8" }}>{active.description}</p>
          )}
        </div>
      )}
    </div>
  )
}
