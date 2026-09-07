import type { Metadata } from "next"
import Image from "next/image"
import ContactForm from "@/components/contact/ContactForm"
import FAQ from "@/components/home/FAQ"
import { CONTACT } from "@/data/contact"
import TrackedLink from "@/components/analytics/TrackedLink"
import { withBasePath } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a La Universal Tango para contrataciones, festivales, eventos privados o consultas generales.",
}

const ICONS = {
  phone:
    "M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.5 1.5 0 0 0-1.211-1.472l-3.483-.697a1.5 1.5 0 0 0-1.503.499l-.986 1.183a11.253 11.253 0 0 1-6.02-6.02l1.184-.986a1.5 1.5 0 0 0 .499-1.503L8.845 3.86a1.5 1.5 0 0 0-1.472-1.21H6a2.25 2.25 0 0 0-2.25 2.25v1.85Z",
  email:
    "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67ZM22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z",
  location:
    "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
  whatsapp:
    "M16 2C8.268 2 2 8.268 2 16c0 2.522.672 4.888 1.845 6.926L2 30l7.297-1.815A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.828-1.594l-.418-.248-4.33 1.077 1.1-4.212-.273-.433A11.462 11.462 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.345-.172-2.04-1.006-2.355-1.12-.315-.115-.545-.172-.775.172-.23.345-.888 1.12-1.088 1.35-.2.23-.4.258-.745.086-.345-.172-1.456-.537-2.774-1.712-1.025-.913-1.717-2.04-1.917-2.385-.2-.345-.021-.531.15-.703.155-.155.345-.4.517-.6.172-.2.23-.345.345-.575.115-.23.057-.43-.029-.602-.086-.172-.775-1.87-1.062-2.56-.28-.672-.563-.58-.775-.59l-.66-.011c-.23 0-.602.086-.917.43-.315.345-1.2 1.174-1.2 2.863s1.229 3.32 1.4 3.55c.172.23 2.42 3.695 5.865 5.182.82.354 1.46.565 1.958.723.823.261 1.572.224 2.163.136.66-.099 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.086-.144-.316-.23-.66-.4z",
  instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.95 4.95.06 1.3.07 1.6.07 4.8 0 3.2 0 3.6-.07 4.9-.15 3.2-1.7 4.8-4.95 4.95-1.3.06-1.6.07-4.9.07-3.2 0-3.6 0-4.9-.07-3.3-.15-4.8-1.75-4.95-4.95C2 15.6 2 15.2 2 12c0-3.2 0-3.6.07-4.9C2.22 3.9 3.75 2.35 7 2.2 8.3 2.15 8.7 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.75.07-2.4.1-3.5 1.25-3.6 3.6C3.6 8.7 3.6 9.05 3.6 12s0 3.3.07 4.55c.1 2.35 1.2 3.5 3.6 3.6 1.25.06 1.6.07 4.75.07s3.5 0 4.75-.07c2.4-.1 3.5-1.25 3.6-3.6.06-1.25.07-1.6.07-4.55s0-3.3-.07-4.55c-.1-2.35-1.2-3.5-3.6-3.6C15.5 4 15.15 4 12 4Zm0 3.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 1.8a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm4.4-2.05a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
  facebook:
    "M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.24-1.5 1.55-1.5H16.6V4.2C16.3 4.16 15.3 4.07 14.14 4.07c-2.4 0-4.05 1.47-4.05 4.16v2.34H7.4v3h2.7V21h3.4Z",
  youtube:
    "M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4c-1 .2-1.8 1-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8c.2 1 1 1.8 2 2 1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z",
}

function IconBadge({ color, path, viewBox = "0 0 24 24" }: { color: string; path: string; viewBox?: string }) {
  return (
    <span
      className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
      style={{ backgroundColor: color }}
    >
      <svg width="18" height="18" viewBox={viewBox} fill="#FFFFFF">
        <path d={path} />
      </svg>
    </span>
  )
}

export default function ContactoPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[45vh] lg:aspect-1672/780 flex items-end">
        {/* Mobile */}
        <Image
          src={withBasePath("/images/contact/hero.jpg")}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover block lg:hidden"
        />
        {/* Desktop: versión recortada (menos alta) */}
        <Image
          src={withBasePath("/images/contact/hero-desktop.jpg")}
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
              "linear-gradient(100deg, rgba(5,10,46,0.85) 0%, rgba(5,10,46,0.6) 40%, rgba(11,27,90,0.3) 100%)",
          }}
        />
        <div className="site-container relative z-10 max-w-2xl pb-6">
          <h1 className="h1-display mb-4">Hablemos de tu Evento</h1>
          <p style={{ color: "#D5D9F0" }}>
            Contactanos para conciertos, festivales y eventos. Respondemos en 24 horas.
          </p>
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
        <div className="site-container grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div
            className="lg:col-span-2 card p-6 sm:p-8"
            style={{
              boxShadow: "0 30px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(184,176,248,0.15)",
              borderColor: "rgba(184,176,248,0.6)",
            }}
          >
            <ContactForm />
          </div>

          <aside className="space-y-6 lg:space-y-0 lg:flex lg:flex-col lg:justify-between lg:gap-6 lg:h-full">
            <div className="card member-card">
              <h3 className="h3-display mb-4 text-lg">Contacto Directo</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#D5D9F0" }}>
                <li>
                  <TrackedLink className="footer-link items-center gap-3" event="contact_phone" eventParams={{ source: "contacto_page" }} href={CONTACT.phoneHref}>
                    <IconBadge color="#6B5BE8" path={ICONS.phone} />
                    {CONTACT.phoneDisplay}
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink className="footer-link items-center gap-3" event="contact_email" eventParams={{ source: "contacto_page" }} href={CONTACT.emailHref}>
                    <IconBadge color="#6B5BE8" path={ICONS.email} />
                    {CONTACT.email}
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink className="footer-link items-center gap-3" event="contact_whatsapp" eventParams={{ source: "contacto_page" }} href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <IconBadge color="#25D366" path={ICONS.whatsapp} viewBox="0 0 32 32" />
                    WhatsApp
                  </TrackedLink>
                </li>
                <li>
                  <span className="footer-link items-center gap-3">
                    <IconBadge color="#6B5BE8" path={ICONS.location} />
                    {CONTACT.locationLabel}
                  </span>
                </li>
              </ul>
            </div>
            <div className="card member-card">
              <h3 className="h3-display mb-4 text-lg">Redes Sociales</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#D5D9F0" }}>
                <li>
                  <a
                    href={CONTACT.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link items-center gap-3"
                    style={{ "--footer-link-fill": "rgba(225,48,108,0.3)" } as React.CSSProperties}
                  >
                    <IconBadge color="#E1306C" path={ICONS.instagram} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link items-center gap-3"
                    style={{ "--footer-link-fill": "rgba(24,119,242,0.3)" } as React.CSSProperties}
                  >
                    <IconBadge color="#1877F2" path={ICONS.facebook} />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link items-center gap-3"
                    style={{ "--footer-link-fill": "rgba(255,0,0,0.3)" } as React.CSSProperties}
                  >
                    <IconBadge color="#FF0000" path={ICONS.youtube} />
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FAQ />
    </>
  )
}
