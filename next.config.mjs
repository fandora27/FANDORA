/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pendaftaran-online-pasien",
  assetPrefix: "/pendaftaran-online-pasien/",
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
