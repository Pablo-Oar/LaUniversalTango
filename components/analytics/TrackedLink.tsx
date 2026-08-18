"use client"

import type { AnchorHTMLAttributes } from "react"
import { trackEvent } from "@/lib/gtag"

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string
  eventParams?: Record<string, string>
}

/* ─────────────────────────────────────────────────────────────
   TRACKED LINK — Wrapper de <a> que dispara un evento de GA4
   antes de navegar (WhatsApp, teléfono, email, redes). Se usa en
   vez de convertir toda la página en Client Component solo para
   agregar el tracking a un link puntual.
   ───────────────────────────────────────────────────────────── */
export default function TrackedLink({ event, eventParams, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(event, eventParams)
        onClick?.(e)
      }}
    />
  )
}
