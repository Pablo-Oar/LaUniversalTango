/* ─────────────────────────────────────────────────────────────
   CONCERTS — Próximos conciertos destacados en Home
   Datos reales provistos por el cliente.
   ───────────────────────────────────────────────────────────── */

export type Concert = {
  id: string
  date: string          // ej: "27 Ago 2026"
  city: string
  venue: string
  title: string
  description: string
  ticketsUrl?: string
}

export const CONCERTS: Concert[] = [
  {
    id: "concert-1",
    date: "5 Sep 2026",
    city: "Rosario, Santa Fe",
    venue: "Familia Friulana",
    title: "Festival Seguime si Podés",
    description: "Presentación en el Festival Seguime si Podés.",
  },
  {
    id: "concert-1b",
    date: "10 Sep 2026",
    city: "Rosario, Santa Fe",
    venue: "Gallo Rojo — Santa Fe 948",
    title: "Presentación en Gallo Rojo",
    description: "Concierto en Gallo Rojo, Rosario.",
  },
  {
    id: "concert-2",
    date: "26 Sep 2026",
    city: "Rosario, Santa Fe",
    venue: "Milonguita del Sur",
    title: "Milonguita del Sur",
    description: "Presentación en la Milonguita del Sur.",
  },
  {
    id: "concert-3",
    date: "3 Oct 2026",
    city: "Venado Tuerto, Santa Fe",
    venue: "Biblioteca Ameghino",
    title: "Presentación en Venado Tuerto",
    description: "Concierto en la Biblioteca Ameghino, Venado Tuerto.",
  },
  {
    id: "concert-4",
    date: "16 Oct 2026",
    city: "Rufino, Santa Fe",
    venue: "Rotary Club",
    title: "Presentación en Rufino",
    description: "Concierto en el Rotary Club de Rufino.",
  },
  {
    id: "concert-5",
    date: "23 Oct 2026",
    city: "Rosario, Santa Fe",
    venue: "Casa del Tango",
    title: "Milonga Universal",
    description: "La Milonga Universal en la Casa del Tango de Rosario.",
  },
  {
    id: "concert-6",
    date: "8 Nov 2026",
    city: "San Rafael, Mendoza",
    venue: "Milonga El Arranque",
    title: "Milonga El Arranque",
    description: "Presentación en la Milonga El Arranque.",
  },
]
