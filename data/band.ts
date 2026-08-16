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
// Descripciones (bio) pendientes de completar por el cliente.
export const MEMBERS: Member[] = [
  {
    id: "bandoneon",
    name: "Guido Gavazza",
    instrument: "Bandoneón",
    bio: "",
    photo: "/images/about/integrantes/guido.png",
  },
  {
    id: "violin",
    name: "Gabriela Araujo",
    instrument: "Violín",
    bio: "",
    photo: "/images/about/integrantes/gabriela.png",
  },
  {
    id: "piano",
    name: "Nicolás Rodríguez",
    instrument: "Piano",
    bio: "",
    photo: "/images/about/integrantes/nicolas.png",
  },
  {
    id: "contrabajo",
    name: "Germán Realini",
    instrument: "Contrabajo",
    bio: "Producción General del grupo.",
    photo: "/images/about/integrantes/german.png",
  },
  {
    id: "voz",
    name: "Lorenza (Carolina Lorenzatti)",
    instrument: "Voz",
    bio: "",
    photo: "/images/about/integrantes/lorenza.png",
  },
]

export type PressMention = {
  outlet: string
  title: string
  url: string
}

export const PRESS_MENTIONS: PressMention[] = [
  {
    outlet: "La Capital",
    title: "La Milonga Universal revive el espíritu de \"El Levante\" en una noche de tango en Rosario",
    url: "https://www.lacapital.com.ar/zoom/la-milonga-universal-revive-el-espiritu-el-levante-una-noche-tango-rosario-n10270732.html",
  },
  {
    outlet: "El Ciudadano",
    title: "La Milonga Universal revive el espíritu de \"El Levante\" en una edición especial en Casa Brava",
    url: "https://elciudadanoweb.com/la-milonga-universal-revive-el-espiritu-de-el-levante-en-una-edicion-especial-en-casa-brava/",
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
