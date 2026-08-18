import type { Metadata } from "next"
import ContactForm from "@/components/contact/ContactForm"
import FAQ from "@/components/home/FAQ"
import { CONTACT } from "@/data/contact"
import TrackedLink from "@/components/analytics/TrackedLink"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a La Universal Tango para contrataciones, festivales, eventos privados o consultas generales.",
}

export default function ContactoPage() {
  return (
    <>
      <section className="bg-gradient-official section-py">
        <div className="site-container max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "#B8B0F8" }}>
            Contacto
          </p>
          <h1 className="h1-display mb-4">Hablemos de tu Evento</h1>
          <p style={{ color: "#D5D9F0" }}>
            Contactanos para conciertos, festivales y eventos. Respondemos en 24 horas.
          </p>
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: "#0B1B5A" }}>
        <div className="site-container grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="card">
              <h3 className="h3-display mb-4 text-lg">Contacto Directo</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#D5D9F0" }}>
                <li><TrackedLink event="contact_phone" eventParams={{ source: "contacto_page" }} href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</TrackedLink></li>
                <li><TrackedLink event="contact_email" eventParams={{ source: "contacto_page" }} href={CONTACT.emailHref}>{CONTACT.email}</TrackedLink></li>
                <li><TrackedLink event="contact_whatsapp" eventParams={{ source: "contacto_page" }} href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</TrackedLink></li>
                <li>{CONTACT.locationLabel}</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="h3-display mb-4 text-lg">Redes Sociales</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#D5D9F0" }}>
                <li><a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FAQ />
    </>
  )
}
