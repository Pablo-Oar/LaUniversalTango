import Link from "next/link"

const HIGHLIGHTS = [
  "Grupo musical profesional de tango",
  "Presentaciones en festivales internacionales",
  "Música auténtica de Buenos Aires",
  "Experiencia de décadas en escenarios",
]

export default function AboutPreview() {
  return (
    <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
      <div className="site-container text-center max-w-3xl mx-auto">
        <h2 className="h2-display mb-6">La Universal Tango</h2>
        <p className="mb-6" style={{ color: "#D5D9F0" }}>
          Somos un grupo de músicos profesionales dedicados a la interpretación
          de tango auténtico, llevando la música de Buenos Aires a escenarios
          de prestigio en Argentina, Europa y Latinoamérica.
        </p>
        <p className="mb-10" style={{ color: "#D5D9F0" }}>
          Cada presentación es una experiencia en vivo: bandoneón, piano, violín,
          contrabajo y voz interpretando el repertorio clásico del tango con la
          fuerza y el sonido de una banda actual. Llevamos esa pasión a teatros,
          festivales y giras internacionales, compartiendo la esencia de Buenos
          Aires en cada escenario.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-xl mx-auto">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#D5D9F0" }}>
              <span style={{ color: "#6B5BE8" }}>●</span>
              {item}
            </li>
          ))}
        </ul>
        <Link href="/bio" className="btn-outline">Conocer más</Link>
      </div>
    </section>
  )
}
