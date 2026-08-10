"use client"

import Image, { ImageProps } from "next/image"
import { useState } from "react"
import Lightbox from "@/components/gallery/Lightbox"

type Props = ImageProps & {
  title?: string
  wrapperClassName?: string
}

/* ─────────────────────────────────────────────────────────────
   ZOOMABLE IMAGE — Envuelve un <Image> individual (no parte de
   una galería) y lo hace clickeable para verlo en grande con
   el mismo Lightbox reutilizable.
   ───────────────────────────────────────────────────────────── */
export default function ZoomableImage({ title, wrapperClassName, ...imageProps }: Props) {
  const [open, setOpen] = useState(false)
  const src = typeof imageProps.src === "string" ? imageProps.src : ""

  // Con `fill`, el botón debe calcar exactamente al contenedor padre (posicionado).
  // Sin `fill`, el botón se comporta como el propio elemento de la imagen.
  const baseClass = imageProps.fill
    ? "absolute inset-0 cursor-zoom-in"
    : "inline-block cursor-zoom-in"

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ver imagen en grande: ${imageProps.alt || title || ""}`}
        className={`${baseClass} ${wrapperClassName ?? ""}`}
      >
        <Image {...imageProps} />
      </button>

      {open && (
        <Lightbox
          items={[{ src, title: title ?? String(imageProps.alt ?? "") }]}
          index={0}
          onClose={() => setOpen(false)}
          onPrev={() => {}}
          onNext={() => {}}
        />
      )}
    </>
  )
}
