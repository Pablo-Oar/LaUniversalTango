/* ─────────────────────────────────────────────────────────────
   GALLERY — Fotos y videos para /galeria y preview en Home
   Completar rutas reales cuando las fotos estén optimizadas en
   public/images/gallery/
   ───────────────────────────────────────────────────────────── */

export type GalleryCategory = "conciertos" | "giras" | "festivales"

export type GalleryPhoto = {
  id: string
  category: GalleryCategory
  title: string
  description: string
  src: string // ruta dentro de /public
}

export type GalleryVideo = {
  id: string
  title: string
  description: string
  youtubeId: string // solo el ID del video de YouTube
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "grupo-color-1",
    category: "conciertos",
    title: "La Universal Tango",
    description: "El quinteto: piano, contrabajo, bandoneón, violín y voz.",
    src: "/images/gallery/grupo-color-1.jpg",
  },
  {
    id: "loca-tour-2025",
    category: "giras",
    title: "Loca Tour 2025",
    description: "Gira europea: Alemania, Suiza, Italia, Bélgica y Países Bajos.",
    src: "/images/gallery/loca-tour-2025.png",
  },
  // TODO: sumar más fotos de conciertos, giras y festivales desde Material/Fotos
  // y optimizarlas (ver checklist de PROMPT_COMPLETADO_FINAL.md)
]

export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    id: "video-1",
    title: "La Universal Tango",
    description: "Presentación en vivo.",
    youtubeId: "CpI6qaQhtl8",
  },
  // TODO: sumar más videos reales de YouTube (@launiversaltango)
]
