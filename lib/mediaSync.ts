/* ─────────────────────────────────────────────────────────────
   MEDIA SYNC — Coordinador simple para que solo un video se
   reproduzca a la vez en toda la página, sin importar en qué
   componente esté (Videos Destacados, grilla de Imágenes
   Destacadas, etc.). Cada reproductor se registra con una función
   para pausarse a sí mismo; al arrancar, avisa a los demás.
   ───────────────────────────────────────────────────────────── */

type PauseHandler = () => void

const handlers = new Map<string, PauseHandler>()

export function registerMedia(id: string, pause: PauseHandler): () => void {
  handlers.set(id, pause)
  return () => {
    if (handlers.get(id) === pause) handlers.delete(id)
  }
}

export function notifyPlaying(id: string) {
  for (const [otherId, pause] of handlers) {
    if (otherId !== id) pause()
  }
}
