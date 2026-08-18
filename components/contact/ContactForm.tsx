"use client"

import { useState } from "react"
import { CONTACT } from "@/data/contact"
import { trackEvent } from "@/lib/gtag"

const INQUIRY_TYPES = [
  "Contratación para evento",
  "Información general",
  "Consulta sobre workshop",
  "Prensa/Colaboración",
  "Otro",
]

const EVENT_TYPES = [
  "Festival de tango",
  "Concierto en teatro",
  "Evento corporativo",
  "Evento privado",
  "Otro",
]

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const isHiring = inquiryType === "Contratación para evento"

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(CONTACT.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        trackEvent("generate_lead", { form: "contacto", tipo_consulta: inquiryType })
        form.reset()
        setInquiryType("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="card text-center py-16">
        <h3 className="h3-display mb-3 text-xl">¡Gracias!</h3>
        <p style={{ color: "#D5D9F0" }}>Nos contactaremos en 24 horas.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm mb-2" style={{ color: "#D5D9F0" }}>Nombre completo *</label>
          <input name="nombre" type="text" required className="form-field" />
        </div>
        <div>
          <label className="block text-sm mb-2" style={{ color: "#D5D9F0" }}>Email *</label>
          <input name="email" type="email" required className="form-field" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm mb-2" style={{ color: "#D5D9F0" }}>Teléfono *</label>
          <input name="telefono" type="tel" required className="form-field" />
        </div>
        <div>
          <label className="block text-sm mb-2" style={{ color: "#D5D9F0" }}>Tipo de consulta *</label>
          <select
            name="tipo_consulta"
            required
            className="form-field"
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
          >
            <option value="" disabled>Seleccionar...</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {isHiring && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t pt-5" style={{ borderColor: "rgba(184,176,248,0.2)" }}>
          <div>
            <label className="block text-sm mb-2" style={{ color: "#D5D9F0" }}>Tipo de evento</label>
            <select name="tipo_evento" className="form-field">
              <option value="" disabled selected>Seleccionar...</option>
              {EVENT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2" style={{ color: "#D5D9F0" }}>Fecha del evento</label>
            <input name="fecha_evento" type="date" className="form-field" />
          </div>
          <div>
            <label className="block text-sm mb-2" style={{ color: "#D5D9F0" }}>Ubicación</label>
            <input name="ubicacion" type="text" className="form-field" />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm mb-2" style={{ color: "#D5D9F0" }}>Mensaje detallado *</label>
        <textarea name="mensaje" required minLength={50} rows={5} className="form-field" />
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-3 text-sm" style={{ color: "#D5D9F0" }}>
          <input name="acepto_terminos" type="checkbox" required />
          Acepto términos y condiciones *
        </label>
        <label className="flex items-center gap-3 text-sm" style={{ color: "#D5D9F0" }}>
          <input name="newsletter" type="checkbox" />
          Quiero recibir el newsletter
        </label>
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary">
        {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
      </button>

      {status === "error" && (
        <p className="text-sm" style={{ color: "#F87171" }}>
          Hubo un error al enviar. Probá de nuevo o escribinos a {CONTACT.email}.
        </p>
      )}
    </form>
  )
}
