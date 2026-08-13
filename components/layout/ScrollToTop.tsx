"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // No forzar el scroll al top si la URL apunta a un ancla (ej. /bio#shows):
    // en ese caso el navegador ya se posicionó donde corresponde.
    if (window.location.hash) return
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
