/* ─────────────────────────────────────────────────────────────
   GALLERY — Fotos y videos para /galeria y preview en Home.

   La categoría de cada foto refleja la carpeta física donde vive
   en public/images/gallery/:
     - gallery/Conciertos/            → category "conciertos"
     - gallery/Giras Internacionales/ → category "giras"
     - gallery/ (suelta, sin subcarpeta) → category "general"
       (no tiene botón de filtro propio: solo aparece en "Todos")
   Para agregar una foto nueva: colocarla en la carpeta que
   corresponda y sumar su entrada acá con esa misma categoría.
   ───────────────────────────────────────────────────────────── */

export type GalleryCategory = "conciertos" | "giras" | "festivales" | "general"

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
  youtubeId?: string // solo el ID del video de YouTube
  localSrc?: string  // ruta a un video propio (mp4) dentro de /public
  poster?: string    // miniatura del video local
  category?: GalleryCategory // si se define, el video también aparece en la grilla de fotos filtrable
  hideFromFeatured?: boolean // si es true, no se muestra en la sección "Videos Destacados"
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  /* ── Sueltas en gallery/ — aparecen solo en "Todos" ───────── */
  {
    id: "grupo-color-1",
    category: "general",
    title: "La Universal Tango",
    description: "El quinteto: piano, contrabajo, bandoneón, violín y voz.",
    src: "/images/gallery/grupo-color-1.jpg",
  },
  {
    id: "guido-fueye",
    category: "general",
    title: "La Universal Tango - Quinteto",
    description: "",
    src: "/images/gallery/guido-fueye.jpg",
  },
  {
    id: "universal-grupo",
    category: "general",
    title: "La Universal Tango - Quinteto",
    description: "",
    src: "/images/gallery/universal.jpg",
  },
  {
    id: "abducidos",
    category: "general",
    title: "La Universal Tango - Quinteto",
    description: "",
    src: "/images/gallery/abducidos.jpg",
  },
  {
    id: "despegar-universalmente",
    category: "general",
    title: "Despegar Universalmente",
    description: "Instantánea artística del grupo en acción.",
    src: "/images/gallery/despegar-universalmente.jpg",
  },
  {
    id: "berlin-2025",
    category: "general",
    title: "Berlín 2025",
    description: "Presentación en Berlín, Alemania, durante la Loca Tour 2025.",
    src: "/images/gallery/berlin-2025.jpg",
  },
  {
    id: "flyer-final-posta",
    category: "general",
    title: "Flyer del Show",
    description: "Arte de difusión de un show en Rosario.",
    src: "/images/gallery/flyer-final-posta.jpg",
  },
  {
    id: "flyer-cuadrado",
    category: "general",
    title: "Flyer del Show",
    description: "",
    src: "/images/gallery/flyer-cuadrado.jpg",
  },

  /* ── gallery/Giras Internacionales/ ───────────────────────── */
  {
    id: "loca-tour-2025",
    category: "giras",
    title: "Loca Tour 2025",
    description: "Gira europea: Alemania, Suiza, Italia, Bélgica y Países Bajos.",
    src: "/images/gallery/Giras%20Internacionales/loca-tour-2025.jpg",
  },

  /* ── gallery/Conciertos/ ───────────────────────────────────── */
  {
    id: "probando-sonido-berlin",
    category: "conciertos",
    title: "Prueba de Sonido en Berlín",
    description: "Preparativos previos al show en Berlín.",
    src: "/images/gallery/Conciertos/probando-sonido-en-berlin.jpg",
  },
  {
    id: "dortmund-alemania-2025",
    category: "conciertos",
    title: "Dortmund, Alemania",
    description: "Show en Dortmund durante la gira europea 2025.",
    src: "/images/gallery/Conciertos/dortmund-alemania-2025.jpg",
  },
  {
    id: "dortmund-alemania",
    category: "conciertos",
    title: "Dortmund, Alemania",
    description: "Otro momento del show en Dortmund.",
    src: "/images/gallery/Conciertos/dortmund-alemania.jpg",
  },
  {
    id: "stuttgart-2025",
    category: "conciertos",
    title: "Stuttgart 2025",
    description: "Presentación en Stuttgart durante la Loca Tour 2025.",
    src: "/images/gallery/Conciertos/stuttgart-2025.jpg",
  },
  {
    id: "gauche-stuttgart-2025",
    category: "conciertos",
    title: "Con El Gauche en Stuttgart",
    description: "Junto a El Gauche, bandoneonista invitado, en Stuttgart.",
    src: "/images/gallery/Conciertos/gauche-stuttgart-2025.jpg",
  },
  {
    id: "ga-stuttgart",
    category: "conciertos",
    title: "Stuttgart",
    description: "Integrante del grupo en Stuttgart, Alemania.",
    src: "/images/gallery/Conciertos/ga-stuttgart.jpg",
  },
  {
    id: "ger-stuttgart",
    category: "conciertos",
    title: "Germán en Stuttgart",
    description: "Germán Realini durante la gira europea.",
    src: "/images/gallery/Conciertos/ger-stuttgart.jpg",
  },
  {
    id: "ger-stuttgart-2",
    category: "conciertos",
    title: "Germán en Stuttgart",
    description: "Germán Realini en Stuttgart, Alemania.",
    src: "/images/gallery/Conciertos/ger-stuttgart-2.jpg",
  },
  {
    id: "nico-stuttgart",
    category: "conciertos",
    title: "Nicolás en Stuttgart",
    description: "Nicolás Rodríguez en Stuttgart, Alemania.",
    src: "/images/gallery/Conciertos/nico-stuttgart.jpg",
  },
  {
    id: "milonga-stuttgart",
    category: "conciertos",
    title: "Milonga en Stuttgart",
    description: "Pista de baile durante la milonga en Stuttgart.",
    src: "/images/gallery/Conciertos/milonga-stuttgart.jpg",
  },
  {
    id: "tango-azul-holanda-2025",
    category: "conciertos",
    title: "Azul Tango, Holanda",
    description: "Presentación en el festival Azul Tango, Países Bajos.",
    src: "/images/gallery/Conciertos/tango-azul-holanda-2025.jpg",
  },
  {
    id: "casa-brava-1",
    category: "conciertos",
    title: "En Vivo en Casa Brava",
    description: "Presentación en vivo en Casa Brava, Rosario.",
    src: "/images/gallery/Conciertos/en-vivo-casa-brava1.jpg",
  },
  {
    id: "casa-brava-2",
    category: "conciertos",
    title: "En Vivo en Casa Brava",
    description: "Otro momento del show en Casa Brava, Rosario.",
    src: "/images/gallery/Conciertos/en-vivo-casa-brava2.jpg",
  },
  {
    id: "casa-brava-3",
    category: "conciertos",
    title: "En Vivo en Casa Brava",
    description: "Cierre del show en Casa Brava, Rosario.",
    src: "/images/gallery/Conciertos/en-vivo-casa-brava-3.jpg",
  },

  /* ── Festivales — Países Bajos (Tango Azul Zwolle, Loca Tour 2025) ── */
  {
    id: "festival-01",
    category: "festivales",
    title: "Gran Milonga Tango Azul",
    description: "Flyer del festival Tango Azul, Zwolle, Países Bajos.",
    src: "/images/gallery/Festivales/festival-01.jpg",
  },
  {
    id: "festival-02",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Presentación en el festival Tango Azul, Zwolle.",
    src: "/images/gallery/Festivales/festival-02.jpg",
  },
  {
    id: "festival-03",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Momento en vivo durante el festival, Países Bajos.",
    src: "/images/gallery/Festivales/festival-03.jpg",
  },
  {
    id: "festival-04",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Presentación en el festival Tango Azul, Zwolle.",
    src: "/images/gallery/Festivales/festival-04.jpg",
  },
  {
    id: "festival-05",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Momento en vivo durante el festival, Países Bajos.",
    src: "/images/gallery/Festivales/festival-05.jpg",
  },
  {
    id: "festival-06",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Presentación en el festival Tango Azul, Zwolle.",
    src: "/images/gallery/Festivales/festival-06.jpg",
  },
  {
    id: "festival-07",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Momento en vivo durante el festival, Países Bajos.",
    src: "/images/gallery/Festivales/festival-07.jpg",
  },
  {
    id: "festival-08",
    category: "festivales",
    title: "Milonga Abrazo, Bussum",
    description: "Guido Gavazza en bandoneón durante la Milonga Abrazo, Bussum, Países Bajos.",
    src: "/images/gallery/Festivales/festival-08.jpg",
  },
  {
    id: "festival-09",
    category: "festivales",
    title: "Milonga Abrazo, Bussum",
    description: "Presentación en la Milonga Abrazo, Bussum, Países Bajos.",
    src: "/images/gallery/Festivales/festival-09.jpg",
  },
  {
    id: "festival-10",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Momento en vivo durante el festival, Países Bajos.",
    src: "/images/gallery/Festivales/festival-10.jpg",
  },
  {
    id: "festival-11",
    category: "festivales",
    title: "Milonga Abrazo, Bussum",
    description: "Presentación en la Milonga Abrazo, Bussum, Países Bajos.",
    src: "/images/gallery/Festivales/festival-11.jpg",
  },
  {
    id: "festival-12",
    category: "festivales",
    title: "Milonga Abrazo, Bussum",
    description: "Presentación en la Milonga Abrazo, Bussum, Países Bajos.",
    src: "/images/gallery/Festivales/festival-12.jpg",
  },
  {
    id: "festival-13",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Momento en vivo durante el festival, Países Bajos.",
    src: "/images/gallery/Festivales/festival-13.jpg",
  },
  {
    id: "festival-14",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Momento en vivo durante el festival, Países Bajos.",
    src: "/images/gallery/Festivales/festival-14.jpg",
  },
  {
    id: "festival-15",
    category: "festivales",
    title: "Gran Milonga Tango Azul",
    description: "Con el equipo del festival Tango Azul, Zwolle, Países Bajos.",
    src: "/images/gallery/Festivales/festival-15.jpg",
  },
  {
    id: "festival-16",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Momento en vivo durante el festival, Países Bajos.",
    src: "/images/gallery/Festivales/festival-16.jpg",
  },
  {
    id: "festival-17",
    category: "festivales",
    title: "Festival Tango Azul",
    description: "Momento en vivo durante el festival, Países Bajos.",
    src: "/images/gallery/Festivales/festival-17.jpg",
  },
]

export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    id: "video-1",
    title: "La Universal Tango",
    description: "Presentación en vivo.",
    youtubeId: "CpI6qaQhtl8",
  },
  {
    id: "tour-2025",
    title: "Tour Europa - 2025",
    description: "Recorrido por la Loca Tour 2025: Alemania, Suiza, Italia, Bélgica y Países Bajos.",
    localSrc: "/videos/tour-2025.mp4",
    poster: "/images/gallery/Giras%20Internacionales/tour-2025-portada.jpg",
    category: "giras",
  },
  {
    id: "festival-video-1",
    title: "Festival Tango Zwolle - Holanda",
    description: "Momento en vivo durante el festival Tango Azul en Zwolle, Países Bajos.",
    localSrc: "/videos/festival-zwolle-1.mp4",
    poster: "/images/gallery/Festivales/festival-video-1-portada.jpg",
    category: "festivales",
    hideFromFeatured: true,
  },
  {
    id: "festival-video-2",
    title: "Festival Tango Zwolle - Holanda",
    description: "Momento en vivo durante el festival Tango Azul en Zwolle, Países Bajos.",
    localSrc: "/videos/festival-zwolle-2.mp4",
    poster: "/images/gallery/Festivales/festival-video-2-portada.jpg",
    category: "festivales",
    hideFromFeatured: true,
  },
  // TODO: sumar más videos reales de YouTube (@launiversaltango)
]
