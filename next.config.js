/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    'API_AUTOHELP': 'http://localhost:8080'
  },
  images: {
    layoutRaw:true,
    domains: [
      "tailwindui.com",
      "localhost"
    ]
  },
  reactStrictMode: false,
}

module.exports = nextConfig
