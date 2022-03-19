/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: { granularChunks: true }
}
// export NODE_OPTIONS="--max-old-space-size=8192" Terminal jika error out of memory
module.exports = nextConfig
