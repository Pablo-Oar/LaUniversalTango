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
    date: "27 Ago 2026",
    city: "Rosario, Santa Fe",
    venue: "Gallo Rojo — Santa Fe 948, 21:00 hs",
    title: "Ciclo Toma 1",
    description: "Junto al Colectivo Tanguero Rosarino.",
  },
  {
    id: "concert-2",
    date: "5 Sep 2026",
    city: "Rosario, Santa Fe",
    venue: "Por confirmar",
    title: "Festival Seguime si Podés",
    description: "Presentación en el Festival Seguime si Podés.",
  },
  {
    id: "concert-3",
    date: "16 Oct 2026",
    city: "Rufino, Santa Fe",
    venue: "Por confirmar",
    title: "Presentación en Rufino",
    description: "Concierto en Rufino. Venue a confirmar.",
  },
  {
    id: "concert-4",
    date: "23 Oct 2026",
    city: "Rosario, Santa Fe",
    venue: "Casa del Tango",
    title: "Milonga Universal",
    description: "Milonga Universal en la Casa del Tango de Rosario.",
  },
  {
    id: "concert-5",
    date: "8 Nov 2026",
    city: "San Rafael, Mendoza",
    venue: "El Arranque",
    title: "Milonga El Arranque",
    description: "Presentación en la Milonga El Arranque.",
  },
]
