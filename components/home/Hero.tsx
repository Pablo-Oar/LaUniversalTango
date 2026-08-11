import Image from "next/image"
import { withBasePath } from "@/lib/basePath"
import { CONTACT } from "@/data/contact"

export default function Hero() {
  return (
    <section className="relative h-[85vh] lg:h-auto lg:min-h-[95vh] overflow-hidden flex flex-col lg:block">
      {/* Mobile: foto de estudio, muestra a todos los integrantes en formato vertical */}
      <Image
        src={withBasePath("/images/hero/grupo-estudio.jpg")}
        alt="La Universal Tango en vivo"
        fill
        priority
        sizes="100vw"
        className="object-cover block lg:hidden"
        style={{ objectPosition: "50% 42%" }}
      />
      {/* Desktop: foto panorámica del grupo */}
      <Image
        src={withBasePath("/images/hero/grupo-principal.jpg")}
        alt="La Universal Tango en vivo"
        fill
        priority
        sizes="100vw"
        className="object-cover hidden lg:block lg:scale-125 lg:translate-x-[6%]"
        style={{ objectPosition: "50% 42%" }}
      />
      {/* Overlay con el gradiente oficial para mantener legibilidad del texto (solo desktop) */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,10,46,0.85) 0%, rgba(5,10,46,0.6) 30%, rgba(11,27,90,0.3) 60%, rgba(11,27,90,0.1) 100%)",
        }}
      />

      {/* MOBILE: título arriba, botones abajo (justify-between) */}
      <div className="site-container relative z-10 flex flex-col justify-between h-full py-10 lg:hidden">
        <div>
          <h1 className="mb-4" style={{ fontFamily: "var(--font-display)", lineHeight: 1.05 }}>
            <span
              className="block"
              style={{
                fontSize: "var(--font-size-h1)",
                fontWeight: 700,
                color: "#FFFFFF",
                textShadow: "0 2px 6px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)",
              }}
            >
              La Universal
            </span>
            <span
              className="block"
              style={{
                fontSize: "var(--font-size-h1)",
                fontWeight: 700,
                color: "#B8B0F8",
                textShadow: "0 2px 6px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)",
              }}
            >
              Tango
            </span>
          </h1>
          <p
            className="text-sm uppercase tracking-[0.25em]"
            style={{ color: "#D5D9F0", textShadow: "0 1px 4px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.7)" }}
          >
            Tradición, pasión y elegancia
          </p>
        </div>

        <div className="cta-pair">
          <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Escuchá Nuestra Música ▶
          </a>
          <a
            href="#shows"
            className="btn-outline btn-shows-mobile"
          >
            Próximos Shows 📅
          </a>
        </div>
      </div>

      {/* DESKTOP: texto centrado verticalmente (fijo); botones posicionados aparte
          con "absolute" para poder moverlos sin que afecte la posición del texto. */}
      <div className="hidden lg:flex site-container relative z-10 h-full min-h-[95vh] items-center pb-88">
        <div>
          <h1 className="mb-6" style={{ fontFamily: "var(--font-display)", lineHeight: 1.05 }}>
            <span className="block" style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, color: "#FFFFFF" }}>
              La Universal
            </span>
            <span className="block" style={{ fontSize: "var(--font-size-h1)", fontWeight: 700, color: "#B8B0F8" }}>
              Tango
            </span>
          </h1>
          <p className="text-sm uppercase tracking-[0.25em]" style={{ color: "#D5D9F0" }}>
            Tradición, pasión y elegancia
          </p>
        </div>
      </div>

      <div className="hidden lg:block absolute left-0 right-0 z-10" style={{ bottom: "90px" }}>
        <div className="site-container">
          <div className="cta-pair">
            <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Escuchá Nuestra Música ▶
            </a>
            <a href="#shows" className="btn-outline">
              Próximos Shows 📅
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
