const QUOTES = [
  {
    quote: "Una interpretación de tango con técnica impecable y profunda pasión.",
    source: "Crítica / Publicación",
  },
  {
    quote: "El público quedó cautivado por la calidad artística de la presentación.",
    source: "Festival Internacional de Tango",
  },
]

export default function Press() {
  return (
    <section className="section-py" style={{ backgroundColor: "#050A2E" }}>
      <div className="site-container">
        <h2 className="h2-display mb-2">En la Prensa</h2>
        <p className="mb-10" style={{ color: "#D5D9F0" }}>Lo que dicen sobre nosotros</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {QUOTES.map((item) => (
            <blockquote key={item.source} className="card">
              <p className="text-lg mb-4" style={{ color: "#FFFFFF", fontFamily: "var(--font-display)" }}>
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="text-sm" style={{ color: "#B8B0F8" }}>— {item.source}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
