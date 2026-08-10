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
};

export default nextConfig;
