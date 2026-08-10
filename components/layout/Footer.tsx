import Link from "next/link"
import { CONTACT } from "@/data/contact"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#050A2E", borderTop: "1px solid rgba(184,176,248,0.15)" }}>
      <div className="site-container py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="h3-display mb-3" style={{ color: "#FFFFFF" }}>La Universal Tango</h3>
          <p className="text-sm" style={{ color: "#D5D9F0" }}>
            Grupo musical profesional de tango. Conciertos, giras internacionales
            y presentaciones en festivales.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider mb-4" style={{ color: "#B8B0F8" }}>Navegación</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#D5D9F0" }}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/bio">Bio</Link></li>
            <li><Link href="/galeria">Galería</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider mb-4" style={{ color: "#B8B0F8" }}>Contacto</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#D5D9F0" }}>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
            <li><a href={CONTACT.emailHref}>{CONTACT.email}</a></li>
            <li>{CONTACT.locationLabel}</li>
            <li className="flex gap-4 pt-2">
              <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-container py-6 text-xs text-center" style={{ borderTop: "1px solid rgba(184,176,248,0.1)", color: "#8B8FB8" }}>
        © {new Date().getFullYear()} La Universal Tango. Todos los derechos reservados.
      </div>
    </footer>
  )
}
