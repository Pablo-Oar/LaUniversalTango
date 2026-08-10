import type { Metadata } from "next"
import Link from "next/link"
import ZoomableImage from "@/components/ui/ZoomableImage"
import { MEMBERS, ACHIEVEMENTS } from "@/data/band"

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
              Grupo Musical Profesional
            </p>
            <h1 className="h1-display mb-6">La Universal Tango</h1>
            <p className="mb-4" style={{ color: "#D5D9F0" }}>
              La Universal Tango está integrada por Bandoneón, Piano, Violín, Contrabajo
              y Cantante. Interpreta obras de Tango, Valses y Milongas tradicionales de la
              década del 40 en sus versiones originales con un sonido actual y poderoso.
            </p>
            <p style={{ color: "#D5D9F0" }}>
              El Tango desde los barrios argentinos al mundo, con su esencia, su poesía y
              sonidos urbanos. Interpretado por músicos profesionales en el género desde
              hace muchos años, realizando numerosos proyectos con grabaciones y giras
              internacionales por diferentes continentes.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {MEMBERS.map((member) => (
                <div key={member.id} className="card">
                  <h3 className="h3-display mb-1 text-xl">{member.name}</h3>
                  <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#8B8FB8" }}>
                    {member.instrument}
                  </p>
                  {member.bio && (
                    <p className="text-sm" style={{ color: "#D5D9F0" }}>{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Concierto */}
      <section className="section-py" style={{ backgroundColor: "#050A2E" }}>
        <div className="site-container max-w-3xl">
          <h2 className="h2-display mb-6">Concierto</h2>
          <p className="mb-4" style={{ color: "#D5D9F0" }}>
            El repertorio está diseñado con sus bases en el &ldquo;tempo&rdquo; de las
            canciones, controlando la dinámica de ritmos para los bailarines. Pugliese,
            Di Sarli, D&apos;Arienzo, Tanturi, D&apos;Angelis, etc., integran el playlist.
            Tenemos un set de 25 canciones, repartido en obras cantadas e instrumentales
            seleccionadas para los &ldquo;milongueros&rdquo; y oyentes, 100% bailable,
            dividido por tandas de tangos, valses y milongas, ofreciendo así un
            espectáculo para que el público baile con todas las canciones.
          </p>
          <p style={{ color: "#D5D9F0" }}>
            La duración del show es de 1:30 hs., que se puede dividir en dos sets o
            entradas de 45 minutos cada una. Además, &ldquo;La Universal Tango&rdquo;
            propone la posibilidad de sumar a la función la participación de bailarines
            y músicos locales de la ciudad donde se presenta, como invitados para
            brindar un espectáculo más completo y variado.
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
