import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { withBasePath } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "Rider Técnico",
  description:
    "Rider técnico de La Universal Tango: requerimientos de sonido, instrumentos y escenario para contratar el show.",
}

const INSTRUMENT_REQUIREMENTS = [
  {
    instrument: "Piano",
    requirements:
      "2 líneas mono para amplificación estéreo. Toma de corriente 220V, cables Plug-Plug. 1 banqueta o silla sin apoya brazos.",
  },
  {
    instrument: "Contrabajo",
    requirements: "1 XLR, salida para micrófono “DPA” condenser, alimentación 48V.",
  },
  {
    instrument: "Bandoneón",
    requirements: "2 XLR, salida para micrófonos condenser, alimentación 48V. 1 silla sin apoya brazos.",
  },
  {
    instrument: "Violín",
    requirements: "1 XLR, salida para micrófono “DPA” condenser, alimentación 48V.",
  },
  {
    instrument: "Voz",
    requirements: "1 micrófono dinámico Shure SM58 o similar. 1 soporte de micrófono con jirafa.",
  },
]

const STAGE_EQUIPMENT = [
  "3 a 5 monitores de piso (side/front fill) para músicos y voz",
  "Sistema de PA acorde a la capacidad del venue",
  "Consola de sonido con al menos 8 canales disponibles",
  "Técnico de sonido durante prueba de sonido y función",
]

/* ─────────────────────────────────────────────────────────────
   RIDER TÉCNICO — Requerimientos técnicos para la contratación
   de La Universal Tango. Textos de referencia provisorios,
   a completar con material definitivo del cliente.
   ───────────────────────────────────────────────────────────── */
export default function RiderPage() {
  return (
    <>
      {/* Presentación */}
      <section className="relative overflow-hidden min-h-[55vh] lg:min-h-0 lg:aspect-1672/941 flex items-center">
        {/* Mobile */}
        <Image
          src={withBasePath("/images/hero/rider-tecnico-hero-mobile.jpg")}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover block lg:hidden"
        />
        {/* Desktop */}
        <Image
          src={withBasePath("/images/hero/rider-tecnico-hero-desktop.jpg")}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover hidden lg:block"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(5,10,46,0.55) 0%, rgba(5,10,46,0.4) 40%, rgba(11,27,90,0.22) 100%)",
          }}
        />
        {/* Título oculto visualmente: se saca el texto del hero pero se mantiene el h1 por SEO/accesibilidad */}
        <h1 className="sr-only">Rider Técnico</h1>
      </section>

      {/* Requerimientos por instrumento */}
      <section style={{ backgroundColor: "#0B1B5A", paddingTop: "50px", paddingBottom: "50px" }}>
        <div className="site-container max-w-3xl">
          <h2 className="h2-display mb-2">Sonido por Instrumento</h2>
          <p className="mb-10" style={{ color: "#D5D9F0" }}>
            Entradas de línea y micrófonos necesarios para cada integrante.
          </p>

          <ul className="space-y-4">
            {INSTRUMENT_REQUIREMENTS.map((item) => (
              <li key={item.instrument} className="card">
                <h3 className="h3-display mb-1 text-lg">{item.instrument}</h3>
                <p className="text-sm" style={{ color: "#D5D9F0" }}>{item.requirements}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Equipamiento de escenario + Coordinación */}
      <section className="section-py" style={{ backgroundColor: "#050A2E" }}>
        <div className="site-container max-w-3xl">
          <h2 className="h2-display mb-6">Escenario y Monitoreo</h2>
          <ul className="space-y-3 mb-12">
            {STAGE_EQUIPMENT.map((item) => (
              <li key={item} className="text-sm flex items-start gap-3" style={{ color: "#D5D9F0" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#6B5BE8" }} />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="h2-display mb-6">Coordinación</h2>
          <p className="mb-8" style={{ color: "#D5D9F0" }}>
            Este documento es una guía general y puede adaptarse según las
            características de cada venue o evento. Para coordinar el rider
            definitivo, el plano de escenario y los horarios de prueba de sonido,
            ponete en contacto con nosotros.
          </p>
          <div className="text-center">
            <Link href="/contacto" className="btn-primary">Contratar para un evento</Link>
          </div>
        </div>
      </section>
    </>
  )
}
