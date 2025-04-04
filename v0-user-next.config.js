/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY || "8da22554-c8da-4418-9852-334b60cc02db",
  },
}

module.exports = nextConfig

