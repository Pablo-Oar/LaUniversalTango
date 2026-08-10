import Link from "next/link"

export default function Workshops() {
  return (
    <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
      <div className="site-container">
        <h2 className="h2-display mb-2">Masterclass Ocasionales</h2>
        <p className="mb-10 max-w-2xl" style={{ color: "#D5D9F0" }}>
          Cuando disponible, ofrecemos sesiones de aprendizaje
        </p>

        <div className="card max-w-md">
          <h3 className="h3-display mb-2 text-xl">Masterclass de Interpretación</h3>
          <p className="text-sm mb-6" style={{ color: "#D5D9F0" }}>
            Sesiones puntuales. Contactar para disponibilidad.
          </p>
          <Link href="/contacto" className="text-sm font-semibold" style={{ color: "#6B5BE8" }}>
            Consultar →
          </Link>
        </div>
      </div>
    </section>
  )
}
