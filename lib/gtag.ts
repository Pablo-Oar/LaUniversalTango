/* ─────────────────────────────────────────────────────────────
   GTAG — Helper para eventos de conversión de Google Analytics 4.
   Envuelve window.gtag con un guard para SSR / bloqueadores de
   anuncios (si el script no cargó, no rompe nada).
   ───────────────────────────────────────────────────────────── */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", eventName, params)
}
