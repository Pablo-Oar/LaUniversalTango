import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"
const isCloudflare = process.env.CF_PAGES === "1"   // Cloudflare lo define solo
const useBasePath = isProd && !isCloudflare          // basePath solo en GitHub Pages
const base = useBasePath ? "/LaUniversalTango" : ""

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: base,
  assetPrefix: base ? `${base}/` : "",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
  // Permite probar "npm run dev" desde el celular en la misma red (ej. http://192.168.1.3:3000).
  // Sin esto, Next.js bloquea el JS por seguridad y la página carga pero queda sin interactividad.
  allowedDevOrigins: ["192.168.1.3"],
};

export default nextConfig;
