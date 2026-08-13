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
      <div className="site-container relative z-10 flex flex-col justify-between h-full -mt-[34px] pb-10 lg:hidden">
        <div>
          <Image
            src={withBasePath("/images/logo/logo-negro.png")}
            alt="La Universal Tango"
            width={340}
            height={102}
            className="w-auto h-[300px] mb-4"
          />
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
        <div className="-mt-52">
          <Image
            src={withBasePath("/images/logo/logo-blanco.png")}
            alt="La Universal Tango"
            width={340}
            height={102}
            className="w-auto h-[450px] mb-6"
          />
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
