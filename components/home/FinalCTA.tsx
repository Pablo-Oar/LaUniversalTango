import Link from "next/link"
import { CONTACT } from "@/data/contact"

export default function FinalCTA() {
  return (
    <section className="bg-gradient-official section-py">
      <div className="site-container text-center max-w-2xl mx-auto">
        <h2 className="h2-display mb-4">¿Interesado en Contratar al Grupo?</h2>
        <p className="mb-10" style={{ color: "#D5D9F0" }}>
          Contactanos para conciertos, festivales y eventos. Respondemos en 24 horas.
        </p>
        <div className="cta-pair justify-center mb-10">
          <Link href="/contacto" className="btn-primary">Contactar Ahora</Link>
          <Link href="/galeria" className="btn-outline">Ver Galería</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#D5D9F0" }}>
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </section>
  )
}
