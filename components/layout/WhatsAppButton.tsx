import { CONTACT } from "@/data/contact"

/* Botón flotante de WhatsApp — fijo en la esquina inferior derecha */
export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background-color: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
        }

        .whatsapp-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.60);
        }

        .whatsapp-fab:active {
          transform: scale(0.96);
        }

        @media (max-width: 640px) {
          .whatsapp-fab {
            bottom: 20px;
            right: 18px;
            width: 52px;
            height: 52px;
          }
        }
      `}</style>

      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Contactar por WhatsApp"
      >
        {/* Ícono oficial de WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="#FFFFFF"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.522.672 4.888 1.845 6.926L2 30l7.297-1.815A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.828-1.594l-.418-.248-4.33 1.077 1.1-4.212-.273-.433A11.462 11.462 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.345-.172-2.04-1.006-2.355-1.12-.315-.115-.545-.172-.775.172-.23.345-.888 1.12-1.088 1.35-.2.23-.4.258-.745.086-.345-.172-1.456-.537-2.774-1.712-1.025-.913-1.717-2.04-1.917-2.385-.2-.345-.021-.531.15-.703.155-.155.345-.4.517-.6.172-.2.23-.345.345-.575.115-.23.057-.43-.029-.602-.086-.172-.775-1.87-1.062-2.56-.28-.672-.563-.58-.775-.59l-.66-.011c-.23 0-.602.086-.917.43-.315.345-1.2 1.174-1.2 2.863s1.229 3.32 1.4 3.55c.172.23 2.42 3.695 5.865 5.182.82.354 1.46.565 1.958.723.823.261 1.572.224 2.163.136.66-.099 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.086-.144-.316-.23-.66-.4z"/>
        </svg>
      </a>
    </>
  )
}
