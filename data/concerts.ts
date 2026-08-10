/* ─────────────────────────────────────────────────────────────
   CONCERTS — Próximos conciertos destacados en Home
   Completar con fechas y datos reales del cliente
   ───────────────────────────────────────────────────────────── */

export type Concert = {
  id: string
  date: string          // ej: "15 Sep 2026"
  city: string
  venue: string
  title: string
  description: string
  ticketsUrl?: string
}

export const CONCERTS: Concert[] = [
  {
    id: "concert-1",
    date: "Próximamente",
    city: "Rosario, Argentina",
    venue: "Por confirmar",
    title: "Concierto de Tango en Vivo",
    description: "Presentación especial de tango en vivo. Fecha a confirmar.",
  },
  {
    id: "concert-2",
    date: "Próximamente",
    city: "Por confirmar",
    venue: "Por confirmar",
    title: "Presentación Especial",
    description: "Detalles a confirmar. Contactanos para más información.",
  },
  {
    id: "concert-3",
    date: "Próximamente",
    city: "Por confirmar",
    venue: "Por confirmar",
    title: "Gira Internacional",
    description: "Detalles a confirmar. Contactanos para más información.",
  },
]
