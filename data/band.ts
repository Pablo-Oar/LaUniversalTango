/* ─────────────────────────────────────────────────────────────
   BAND — Integrantes del grupo y logros para /bio
   Completar con datos reales del cliente (Material/Bio)
   ───────────────────────────────────────────────────────────── */

export type Member = {
  id: string
  name: string
  instrument: string
  bio: string
  photo: string // ruta dentro de /public/images/about/integrantes/
}

// Formación confirmada por el cliente, el Rider Técnico y Bio.Español.docx.
// TODO: falta foto individual de cada integrante (headshot 600x600) —
// por ahora se usa la foto grupal en la sección "Los Músicos" de /bio.
export const MEMBERS: Member[] = [
  {
    id: "bandoneon",
    name: "Guido Gavazza",
    instrument: "Bandoneón",
    bio: "",
    photo: "/images/about/integrantes/guido-gavazza.jpg",
  },
  {
    id: "violin",
    name: "Gabriela Araujo",
    instrument: "Violín",
    bio: "",
    photo: "/images/about/integrantes/gabriela-araujo.jpg",
  },
  {
    id: "piano",
    name: "Nicolás Rodríguez",
    instrument: "Piano",
    bio: "",
    photo: "/images/about/integrantes/nicolas-rodriguez.jpg",
  },
  {
    id: "contrabajo",
    name: "Germán Realini",
    instrument: "Contrabajo",
    bio: "Producción General del grupo.",
    photo: "/images/about/integrantes/german-realini.jpg",
  },
  {
    id: "voz",
    name: "Lorenza (Carolina Lorenzatti)",
    instrument: "Voz",
    bio: "",
    photo: "/images/about/integrantes/lorenza.jpg",
  },
]

export type Achievement = {
  festival: string
  year: string
  city: string
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    festival: "Loca Tour — Gira Europea (con El Gauche, bandoneonista invitado)",
    year: "2025",
    city: "21 fechas: Alemania, Suiza, Italia, Bélgica y Países Bajos",
  },
  // TODO: sumar festivales/reconocimientos previos a 2025 si el cliente los provee
]
