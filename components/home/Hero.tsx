import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <Image
        src="/images/hero/grupo-principal.jpg"
        alt="La Universal Tango en vivo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 30%" }}
      />
      {/* Overlay con el gradiente oficial para mantener legibilidad del texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,10,46,0.92) 0%, rgba(11,27,90,0.85) 35%, rgba(56,78,168,0.55) 70%, rgba(107,91,232,0.35) 100%)",
        }}
      />

      <div className="site-container py-24 relative z-10">
        <p className="text-sm uppercase tracking-[0.2em] mb-6" style={{ color: "#B8B0F8" }}>
          Grupo Musical Profesional
        </p>
        <h1 className="h1-display max-w-3xl mb-6">
          La Música de Tango Auténtica
        </h1>
        <p className="text-lg max-w-2xl mb-10" style={{ color: "#D5D9F0" }}>
          Presentaciones en escenarios del mundo. Conciertos profesionales
          de tango argentino.
        </p>
        <div className="cta-pair">
          <Link href="/contacto" className="btn-primary">Contrataciones</Link>
          <Link href="/galeria" className="btn-outline">Galería</Link>
        </div>
      </div>
    </section>
  )
}
