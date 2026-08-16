import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import ZoomableImage from "@/components/ui/ZoomableImage"
import { MEMBERS, ACHIEVEMENTS } from "@/data/band"
import { CONCERTS } from "@/data/concerts"
import { withBasePath } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "Bio",
  description:
    "Conocé la historia, integrantes y filosofía de La Universal Tango, grupo musical profesional de tango.",
}

export default function BioPage() {
  return (
    <>
      {/* Presentación */}
      <section className="bg-gradient-official section-py">
        <div className="site-container grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "#B8B0F8" }}>
              Sobre la Universal
            </p>
            <h1 className="h1-display mb-6">La Universal Tango</h1>
            <p className="mb-4" style={{ color: "#D5D9F0" }}>
              La Universal Tango está integrada por Bandoneón, Piano, Violín, Contrabajo
              y Cantante. Se formó en el año 2023 con el concepto de habitar las milongas
              y festivales de Argentina y otros continentes.
            </p>
            <p style={{ color: "#D5D9F0" }}>
              Interpreta obras de Tango, Valses y Milongas tradicionales de la década del
              40 en sus versiones originales con un sonido actual y poderoso,
              presentándose en importantes escenarios y festivales de Argentina como el
              mítico Marabú, La Viruta (Palermo) y el Bilongón (San Telmo), además de
              festivales internacionales como Azul Tango (Holanda) y Tangazo (Alemania),
              y milongas en Zúrich, Milán, Hamburgo, entre otras ciudades.
            </p>
            <p className="mt-4" style={{ color: "#D5D9F0" }}>
              El Tango desde los barrios argentinos al mundo, con su esencia, su poesía y
              sonidos urbanos. Interpretado por músicos profesionales en el género con años
              de trayectoria, realizando numerosos proyectos con grabaciones y giras
              internacionales por diferentes partes del mundo.
            </p>
          </div>
          <div
            className="lg:col-span-2 relative aspect-[4/5] rounded-lg overflow-hidden"
            style={{ backgroundColor: "#0B1B5A" }}
          >
            <ZoomableImage
              src="/images/about/grupo-estudio.jpg"
              alt="La Universal Tango - Piano, contrabajo, violín, bandoneón y voz"
              title="La Universal Tango"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              style={{ objectPosition: "50% 100%" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Integrantes */}
      <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
        <div className="site-container">
          <h2 className="h2-display mb-2">Los Músicos</h2>
          <p className="mb-10" style={{ color: "#D5D9F0" }}>
            Piano, Contrabajo, Bandoneón, Violín y Voz
          </p>

          {MEMBERS.length === 0 ? (
            <p style={{ color: "#D5D9F0" }}>Próximamente: presentación de los integrantes del grupo.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {MEMBERS.map((member) => (
                <div key={member.id} className="card overflow-hidden p-0">
                  <div className="relative aspect-4/5 max-w-32 sm:max-w-56 mx-auto mt-4 sm:mt-6" style={{ backgroundColor: "#1C2D78" }}>
                    <Image
                      src={withBasePath(member.photo)}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 128px, 224px"
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="p-3 sm:p-6 text-center sm:text-left">
                    <h3 className="h3-display mb-1 text-base sm:text-xl">{member.name}</h3>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3" style={{ color: "#8B8FB8" }}>
                      {member.instrument}
                    </p>
                    {member.bio && (
                      <p className="text-xs sm:text-sm" style={{ color: "#D5D9F0" }}>{member.bio}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Próximas Fechas */}
      <section id="shows" className="section-py scroll-mt-[90px]" style={{ backgroundColor: "#050A2E" }}>
        <div className="site-container max-w-3xl">
          <h2 className="h2-display mb-10">Próximas Fechas</h2>
          <ul className="space-y-4">
            {CONCERTS.map((show) => (
              <li key={show.id} className="card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="font-semibold" style={{ color: "#FFFFFF" }}>{show.title}</p>
                  <p className="text-sm" style={{ color: "#D5D9F0" }}>
                    {show.city} — {show.venue}
                  </p>
                </div>
                <p className="text-sm font-semibold shrink-0" style={{ color: "#B8B0F8" }}>{show.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Concierto */}
      <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
        <div className="site-container max-w-3xl">
          <h2 className="h2-display mb-6">Concierto</h2>
          <p className="mb-4" style={{ color: "#D5D9F0" }}>
            El repertorio está pensado desde la pista y para la pista, cuidando
            especialmente los tempos, la cadencia y la dinámica de cada tanda, para
            acompañar el baile y mantener el clima de la milonga.
          </p>
          <p className="mb-4" style={{ color: "#D5D9F0" }}>
            Pugliese, Di Sarli, D&apos;Arienzo, Tanturi, D&apos;Agostino y otros grandes
            maestros forman parte de nuestra música, combinando temas cantados e
            instrumentales.
          </p>
          <p className="mb-4" style={{ color: "#D5D9F0" }}>
            Una selección pensada para los milongueros y para quienes disfrutan
            escuchar tango, con un repertorio 100% bailable, organizado en tandas y con
            una dinámica que busca que en la pista se encuentren la energía y el abrazo
            durante todo el show.
          </p>
          <p style={{ color: "#D5D9F0" }}>
            La Universal Tango también ofrece un show alternativo para salas de
            conciertos y eventos privados.
          </p>
        </div>
      </section>

      {/* Filosofía */}
      <section className="section-py" style={{ backgroundColor: "#050A2E" }}>
        <div className="site-container max-w-3xl">
          <h2 className="h2-display mb-6">Filosofía</h2>
          <p className="mb-8" style={{ color: "#D5D9F0" }}>
            <strong style={{ color: "#FFFFFF" }}>Misión:</strong> Ser embajadores auténticos
            del tango, preservando y compartiendo la riqueza musical de este arte único en
            escenarios del mundo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              ["Autenticidad", "Tango de verdad, respetando la tradición"],
              ["Excelencia", "Solo presentaciones de máxima calidad"],
              ["Profesionalismo", "Técnica impecable y dedicación"],
              ["Pasión", "La música debe sentirse en el alma"],
            ].map(([title, desc]) => (
              <div key={title} className="card">
                <h3 className="h3-display mb-2 text-lg">{title}</h3>
                <p className="text-sm" style={{ color: "#D5D9F0" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
        <div className="site-container max-w-3xl">
          <h2 className="h2-display mb-6">Workshops</h2>
          <p className="mb-4" style={{ color: "#D5D9F0" }}>
            La Universal también ofrece workshops y masterclass de interpretación del
            tango para músicos y bailarines, con material académico, herramientas y
            partituras que se entregarán a cada integrante que participe de los
            talleres. Este trabajo también incluye la posibilidad de trabajar en
            conjunto con artistas locales de la ciudad de donde se presentará el grupo.
          </p>
          <p style={{ color: "#D5D9F0" }}>
            Los talleres se pueden brindar en inglés y español.
          </p>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
        <div className="site-container">
          <h2 className="h2-display mb-10">Reconocimientos</h2>
          {ACHIEVEMENTS.length === 0 ? (
            <p style={{ color: "#D5D9F0" }}>Próximamente: listado de festivales y reconocimientos.</p>
          ) : (
            <ul className="space-y-3">
              {ACHIEVEMENTS.map((a) => (
                <li key={`${a.festival}-${a.year}`} className="text-sm" style={{ color: "#D5D9F0" }}>
                  <strong style={{ color: "#FFFFFF" }}>{a.festival}</strong> — {a.year} — {a.city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-py text-center" style={{ backgroundColor: "#050A2E" }}>
        <div className="site-container">
          <Link href="/contacto" className="btn-primary">Contratar para un evento</Link>
        </div>
      </section>
    </>
  )
}
