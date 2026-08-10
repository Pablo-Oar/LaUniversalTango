import Image from "next/image"
import { withBasePath } from "@/lib/basePath"
import { CONTACT } from "@/data/contact"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <Image
        src={withBasePath("/images/hero/grupo-principal.jpg")}
        alt="La Universal Tango en vivo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 42%" }}
      />
      {/* Overlay con el gradiente oficial para mantener legibilidad del texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,10,46,0.85) 0%, rgba(5,10,46,0.6) 30%, rgba(11,27,90,0.3) 60%, rgba(11,27,90,0.1) 100%)",
        }}
      />

      <div className="site-container py-24 relative z-10">
        <h1 className="mb-6" style={{ fontFamily: "var(--font-display)", lineHeight: 1.05 }}>
          <span
            className="block"
            style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, color: "#FFFFFF" }}
          >
            La Universal
          </span>
          <span
            className="block"
            style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, color: "#B8B0F8" }}
          >
            Tango
          </span>
        </h1>
        <p className="text-sm uppercase tracking-[0.25em] mb-10" style={{ color: "#D5D9F0" }}>
          Tradición, pasión y elegancia
        </p>
        <div className="cta-pair">
          <a
            href={CONTACT.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Escuchá Nuestra Música ▶
          </a>
          <a href="#shows" className="btn-outline">
            Próximos Shows 📅
          </a>
        </div>
      </div>
    </section>
  )
}
