"use client"

import Link from "next/link"
import Image from "next/image"
import { CONTACT } from "@/data/contact"
import { withBasePath } from "@/lib/basePath"

const SOCIAL_ICONS = [
  {
    href: CONTACT.social.instagram,
    label: "Instagram",
    color: "#E1306C",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.95 4.95.06 1.3.07 1.6.07 4.8 0 3.2 0 3.6-.07 4.9-.15 3.2-1.7 4.8-4.95 4.95-1.3.06-1.6.07-4.9.07-3.2 0-3.6 0-4.9-.07-3.3-.15-4.8-1.75-4.95-4.95C2 15.6 2 15.2 2 12c0-3.2 0-3.6.07-4.9C2.22 3.9 3.75 2.35 7 2.2 8.3 2.15 8.7 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.75.07-2.4.1-3.5 1.25-3.6 3.6C3.6 8.7 3.6 9.05 3.6 12s0 3.3.07 4.55c.1 2.35 1.2 3.5 3.6 3.6 1.25.06 1.6.07 4.75.07s3.5 0 4.75-.07c2.4-.1 3.5-1.25 3.6-3.6.06-1.25.07-1.6.07-4.55s0-3.3-.07-4.55c-.1-2.35-1.2-3.5-3.6-3.6C15.5 4 15.15 4 12 4Zm0 3.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 1.8a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm4.4-2.05a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
  },
  {
    href: CONTACT.social.youtube,
    label: "YouTube",
    color: "#FF0000",
    path: "M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4c-1 .2-1.8 1-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8c.2 1 1 1.8 2 2 1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z",
  },
  {
    href: CONTACT.social.facebook,
    label: "Facebook",
    color: "#1877F2",
    path: "M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.24-1.5 1.55-1.5H16.6V4.2C16.3 4.16 15.3 4.07 14.14 4.07c-2.4 0-4.05 1.47-4.05 4.16v2.34H7.4v3h2.7V21h3.4Z",
  },
]

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/bio", label: "Bio" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#150F35",
        borderTop: "2px solid #B4A9A7",
        boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
      }}
    >
      {/* Foto de fondo, fundida con el color de fondo del footer */}
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/images/footer/footer.png")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 55%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #150F35 0%, #150F35 30%, rgba(21,15,53,0.35) 65%, rgba(21,15,53,0.1) 100%)",
          }}
        />
      </div>

      <div className="site-container py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        <div>
          <h3 className="h3-display mb-3 text-xl" style={{ color: "#FFFFFF" }}>La Universal Tango</h3>
          <p className="text-sm" style={{ color: "#D5D9F0" }}>
            Grupo musical profesional de tango. Conciertos, giras internacionales
            y presentaciones en festivales.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-5" style={{ color: "#FFFFFF" }}>
            Navegación
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: "#D5D9F0" }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-5" style={{ color: "#FFFFFF" }}>
            Contacto
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: "#D5D9F0" }}>
            <li><a href={CONTACT.phoneHref} className="footer-link">{CONTACT.phoneDisplay}</a></li>
            <li><a href={CONTACT.emailHref} className="footer-link">{CONTACT.email}</a></li>
            <li>{CONTACT.locationLabel}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-5" style={{ color: "#FFFFFF" }}>
            Seguinos
          </h3>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                style={{ border: "1px solid rgba(184,176,248,0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = social.color)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#F2F3FF">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="site-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs relative z-10"
        style={{ borderTop: "1px solid rgba(184,176,248,0.15)", color: "#8B8FB8" }}
      >
        <p>© {new Date().getFullYear()} La Universal Tango</p>
        <div className="flex gap-6">
          <a href={CONTACT.emailHref} className="transition-colors hover:text-white">Prensa</a>
          <a href="/contacto" className="transition-colors hover:text-white">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  )
}
