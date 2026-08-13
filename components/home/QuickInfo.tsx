import Link from "next/link"
import Image from "next/image"
import { CONCERTS } from "@/data/concerts"
import { LATEST_RELEASE } from "@/data/release"
import { CONTACT } from "@/data/contact"
import { withBasePath } from "@/lib/basePath"

const STREAMING_ICONS = [
  {
    label: "Spotify",
    url: LATEST_RELEASE.spotifyUrl,
    color: "#1DB954",
    path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.34 14.4a.7.7 0 0 1-.96.24c-2.63-1.6-5.94-1.97-9.84-1.08a.7.7 0 1 1-.31-1.36c4.27-.97 7.93-.55 10.87 1.24.34.2.45.65.24.96Zm1.15-2.68a.86.86 0 0 1-1.18.29c-3-1.85-7.58-2.38-11.13-1.3a.86.86 0 1 1-.5-1.65c4.06-1.23 9.11-.64 12.52 1.47.4.25.53.78.29 1.19Zm.1-2.72c-3.6-2.14-9.53-2.34-12.96-1.29a1.03 1.03 0 1 1-.6-1.98c3.94-1.2 10.47-.96 14.6 1.48a1.03 1.03 0 1 1-1.04 1.79Z",
  },
  {
    label: "YouTube",
    url: CONTACT.social.youtube,
    color: "#FF0000",
    path: "M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4c-1 .2-1.8 1-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8c.2 1 1 1.8 2 2 1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z",
  },
  {
    label: "Apple Music",
    url: LATEST_RELEASE.appleMusicUrl,
    color: "#FA243C",
    path: "M17.5 2h-11A4.5 4.5 0 0 0 2 6.5v11A4.5 4.5 0 0 0 6.5 22h11a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 17.5 2Zm-1.2 5.1v6.85a2.1 2.1 0 1 1-1.3-1.94V8.7l-4.7 1.1v5.8a2.1 2.1 0 1 1-1.3-1.94V7.3a.65.65 0 0 1 .5-.63l6.2-1.45a.65.65 0 0 1 .8.63Z",
  },
]

/* ─────────────────────────────────────────────────────────────
   QUICK INFO — Franja de 3 columnas: Sobre Nosotros / Último
   Lanzamiento / Próximos Shows. Estructura y paleta tomadas del
   mockup oficial del cliente (EstructuraWeb.png).
   ───────────────────────────────────────────────────────────── */
export default function QuickInfo() {
  const shows = CONCERTS.slice(0, 3)

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-[0.8fr_0.8fr_1.4fr]"
      style={{
        borderTop: "2px solid #B4A9A7",
        boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
      }}
    >
      {/* Sobre Nosotros */}
      <div className="relative p-10 lg:p-12 flex flex-col overflow-hidden" style={{ backgroundColor: "#0B1B5A" }}>
        <Image
          src={withBasePath("/images/about/SobreNosotrosHome.png")}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #0B1B5A 15%, rgba(11,27,90,0.75) 55%, rgba(11,27,90,0.55) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col flex-1">
          <h2 className="text-xl font-bold tracking-tight uppercase mb-1" style={{ color: "#FFFFFF" }}>
            Sobre la Universal
          </h2>
          <div className="w-8 h-px mb-6" style={{ backgroundColor: "#FFFFFF" }} />
          <p className="text-base leading-relaxed mb-8" style={{ color: "#D5D9F0" }}>
            La universal es un grupo milonguero que interpreta tangos, valses y
            milongas tradicionales de la década del 40. Llevando a las pistas su
            repertorio intenso y vibrante.
          </p>
          <Link href="/bio" className="btn-outline self-start mt-auto">Conocé Nuestra Historia</Link>
        </div>
      </div>

      {/* Último Lanzamiento */}
      <div
        className="relative p-10 lg:p-12 flex flex-col"
        style={{ backgroundColor: "#D9D6E8", borderLeft: "2px solid #B4A9A7" }}
      >
        <h2 className="text-xl font-bold tracking-tight uppercase mb-1" style={{ color: "#6B5BE8" }}>
          Último Lanzamiento
        </h2>
        <div className="w-8 h-px mb-6" style={{ backgroundColor: "#6B5BE8" }} />
        <div className="flex items-start gap-5 mb-6">
          <div className="relative w-32 h-44 rounded overflow-hidden shrink-0" style={{ backgroundColor: "#1C2D78" }}>
            <Image
              src={withBasePath(LATEST_RELEASE.coverImage)}
              alt={LATEST_RELEASE.albumTitle}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-lg font-bold uppercase tracking-tight truncate" style={{ color: "#050A2E" }}>
              {LATEST_RELEASE.albumTitle}
            </p>
            <p className="text-sm truncate mb-6" style={{ color: "#0B1B5A" }}>
              {LATEST_RELEASE.trackTitle}
            </p>

            {/* Reproductor (visual, sin audio real todavía) */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                style={{ backgroundColor: "#6B5BE8" }}
              >
                <span style={{ color: "#FFFFFF", fontSize: "14px", marginLeft: "2px" }}>▶</span>
              </div>
              <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: "rgba(11,27,90,0.15)" }}>
                <div className="h-1 rounded-full" style={{ width: "0%", backgroundColor: "#6B5BE8" }} />
              </div>
              <span className="text-xs shrink-0" style={{ color: "#0B1B5A" }}>{LATEST_RELEASE.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-auto">
          {STREAMING_ICONS.map((s) =>
            s.url ? (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: "#0B1B5A" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={s.color}><path d={s.path} /></svg>
                {s.label}
              </a>
            ) : (
              <span
                key={s.label}
                aria-label={`${s.label} (próximamente)`}
                title="Próximamente"
                className="flex items-center gap-1.5 text-xs font-semibold cursor-default"
                style={{ color: "#0B1B5A" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={s.color}><path d={s.path} /></svg>
                {s.label}
              </span>
            )
          )}
        </div>
      </div>

      {/* Próximos Shows */}
      <div
        id="shows"
        className="relative p-10 lg:p-12 flex flex-col scroll-mt-[90px]"
        style={{ backgroundColor: "#D9D6E8" }}
      >
        {/* Línea divisoria — horizontal en mobile (columnas apiladas), vertical en desktop */}
        <div
          className="block lg:hidden absolute top-0 left-10 right-10"
          style={{ height: "2px", backgroundColor: "#B4A9A7" }}
        />
        <div
          className="hidden lg:block absolute left-0 top-8 bottom-8"
          style={{ width: "2px", backgroundColor: "#B4A9A7" }}
        />
        <h2 className="text-xl font-bold tracking-tight uppercase mb-1" style={{ color: "#6B5BE8" }}>
          Próximos Shows
        </h2>
        <div className="w-8 h-px mb-6" style={{ backgroundColor: "#6B5BE8" }} />
        <ul className="mb-6">
          {shows.map((show, i) => (
            <li
              key={show.id}
              className="flex items-center justify-between gap-3 text-sm py-3"
              style={i > 0 ? { borderTop: "1px solid rgba(11,27,90,0.15)" } : undefined}
            >
              <div className="min-w-0 flex-1 grid grid-cols-1 sm:grid-cols-[95px_125px_1fr] gap-y-0.5 sm:gap-x-4 sm:items-center">
                <p className="font-semibold" style={{ color: "#050A2E" }}>{show.date}</p>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#0B1B5A" }}>
                  {show.city}
                </p>
                <p className="text-sm truncate" style={{ color: "#6B5B8F" }}>
                  {show.venue}
                </p>
              </div>
              <Link
                href="/contacto"
                className="text-xs font-semibold px-3 py-1.5 rounded shrink-0 uppercase tracking-wide"
                style={{ backgroundColor: "#6B5BE8", color: "#FFFFFF" }}
              >
                Comprar
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={withBasePath("/bio/#shows")}
          className="btn-outline text-sm self-center mt-auto"
          style={{ borderColor: "#6B5BE8", color: "#0B1B5A" }}
        >
          Ver Todos los Shows
        </a>
      </div>
    </section>
  )
}
