import { CONTACT } from "@/data/contact"

export default function MusicGroupSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "La Universal Tango",
    description:
      "Grupo musical profesional de tango. Conciertos, giras y presentaciones internacionales.",
    url: "https://www.launiversaltango.com",
    image: "https://www.launiversaltango.com/images/logo/logo-blanco.png",
    genre: ["Tango", "Música Clásica"],
    sameAs: [
      CONTACT.social.instagram,
      CONTACT.social.facebook,
      CONTACT.social.youtube,
    ],
    performingLocation: {
      "@type": "Place",
      name: "Rosario, Argentina",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
