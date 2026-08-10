/* ─────────────────────────────────────────────────────────────
   CONTACT — Fuente de verdad de TODOS los datos de contacto.
   Cambiar teléfono / email / redes / WhatsApp se hace SOLO acá.
   ───────────────────────────────────────────────────────────── */

const PHONE_RAW = "5493416050195" // sin + ni símbolos (para wa.me / tel)

export const CONTACT = {
  /* ── Teléfono ─────────────────────────────────────────────── */
  phoneDisplay: "+54 9 341-6050195",
  phoneHref: `tel:+${PHONE_RAW}`,
  phoneRaw: PHONE_RAW,

  /* ── Email ────────────────────────────────────────────────── */
  email: "tangolauniversal@gmail.com",
  emailHref: "mailto:tangolauniversal@gmail.com",

  /* ── WhatsApp ─────────────────────────────────────────────── */
  whatsappHref: `https://wa.me/${PHONE_RAW}`,

  /* ── Ubicación ────────────────────────────────────────────── */
  locationLabel: "Rosario, Santa Fe - Argentina",
  locationSub: "Giras en Argentina, Europa y Latinoamérica",
  locationHref: "https://www.google.com/maps/search/Rosario,+Santa+Fe,+Argentina",

  /* ── Redes sociales ───────────────────────────────────────── */
  social: {
    instagram: "https://www.instagram.com/launiversaltango",
    facebook: "https://www.facebook.com/share/1EcuDeSZbW/",
    youtube: "https://youtube.com/@launiversaltango",
  },

  /* ── Formspree ────────────────────────────────────────────── */
  // TODO: reemplazar por el endpoint real cuando se cree la cuenta Formspree
  formspreeEndpoint: "https://formspree.io/f/REEMPLAZAR_FORM_ID",
}
