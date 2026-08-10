export default function Newsletter() {
  return (
    <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
      <div className="site-container text-center max-w-xl mx-auto">
        <h2 className="h2-display mb-3">Mantente Actualizado</h2>
        <p className="mb-8" style={{ color: "#D5D9F0" }}>
          Recibe info sobre nuevos conciertos y giras
        </p>
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Tu email"
            required
            className="form-field flex-1"
          />
          <button type="submit" className="btn-primary">Suscribirse</button>
        </form>
      </div>
    </section>
  )
}
