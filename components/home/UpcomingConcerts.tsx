import Link from "next/link"
import { CONCERTS } from "@/data/concerts"

export default function UpcomingConcerts() {
  return (
    <section className="section-py" style={{ backgroundColor: "#050A2E" }}>
      <div className="site-container">
        <h2 className="h2-display mb-2">Próximos Conciertos</h2>
        <p className="mb-10" style={{ color: "#D5D9F0" }}>
          Presentaciones en vivo alrededor del mundo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONCERTS.slice(0, 3).map((concert) => (
            <div key={concert.id} className="card">
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#B8B0F8" }}>
                {concert.date}
              </p>
              <h3 className="h3-display mb-2 text-xl">{concert.title}</h3>
              <p className="text-sm mb-1" style={{ color: "#D5D9F0" }}>{concert.venue}</p>
              <p className="text-sm mb-4" style={{ color: "#8B8FB8" }}>{concert.city}</p>
              <p className="text-sm mb-6" style={{ color: "#D5D9F0" }}>{concert.description}</p>
              <Link href="/contacto" className="text-sm font-semibold" style={{ color: "#6B5BE8" }}>
                Información →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/galeria" className="btn-outline">Ver todos los conciertos</Link>
        </div>
      </div>
    </section>
  )
}
