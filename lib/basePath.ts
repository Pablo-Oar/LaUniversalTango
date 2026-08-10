/* ─────────────────────────────────────────────────────────────
   BASE PATH — En export estático con images.unoptimized:true,
   next/image NO antepone el basePath a los src locales (a
   diferencia de los archivos _next/). Este helper lo hace a mano
   para que las imágenes carguen bien tanto en local (sin
   basePath) como en GitHub Pages (con basePath "/LaUniversalTango").
   ───────────────────────────────────────────────────────────── */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function withBasePath(path: string): string {
  // No tocar URLs absolutas (http/https) ni si ya viene prefijado.
  if (/^https?:\/\//.test(path)) return path
  if (BASE_PATH && path.startsWith(BASE_PATH)) return path
  return `${BASE_PATH}${path}`
}
