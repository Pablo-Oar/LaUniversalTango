"use client"

import SimpleParallax from "simple-parallax-js"
import Image, { type ImageProps } from "next/image"

type Props = ImageProps & {
  scale?: number
  orientation?: "up" | "down" | "left" | "right"
}

/* ─────────────────────────────────────────────────────────────
   PARALLAX IMAGE — Wrapper cliente de simple-parallax-js para
   usar con next/image (modo fill). Se necesita como Client
   Component aparte porque la librería usa hooks de React y no
   puede importarse directo dentro de un Server Component.
   ───────────────────────────────────────────────────────────── */
export default function ParallaxImage({ scale = 1.2, orientation = "up", ...imageProps }: Props) {
  return (
    <SimpleParallax scale={scale} orientation={orientation} delay={0.5}>
      <Image {...imageProps} />
    </SimpleParallax>
  )
}
