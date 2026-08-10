"use client"

import { useState } from "react"

const FAQS = [
  {
    q: "¿Dónde se pueden ver nuestros conciertos?",
    a: "Presentamos en teatros y festivales de tango en Argentina, Europa y Latinoamérica. Consulta la sección de conciertos o contáctanos para información sobre eventos próximos.",
  },
  {
    q: "¿Cómo contratar al grupo para un evento?",
    a: "Ofrecemos presentaciones para festivales, teatros y eventos corporativos. Contactanos directamente con detalles de tu evento (fecha, ubicación, tipo de presentación).",
  },
  {
    q: "¿Tienen disponibilidad para conciertos privados?",
    a: "Sí, evaluamos solicitudes según disponibilidad de agenda. Contáctanos para discutir posibilidades y presupuesto.",
  },
  {
    q: "¿Ofrecen versiones acústicas o amplificadas?",
    a: "Ofrecemos diferentes configuraciones según el venue. Trabajamos con teatros y salas para optimizar la acústica.",
  },
  {
    q: "¿Tienen material audiovisual profesional?",
    a: "Sí, disponemos de videos de presentaciones, fotos profesionales y material promocional. Todo disponible en la galería.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-py" style={{ backgroundColor: "#050A2E" }}>
      <div className="site-container max-w-3xl">
        <h2 className="h2-display mb-10">Preguntas Frecuentes</h2>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <div key={item.q} className="card !p-0 overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold" style={{ color: "#FFFFFF" }}>{item.q}</span>
                <span style={{ color: "#B8B0F8" }}>{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm" style={{ color: "#D5D9F0" }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
