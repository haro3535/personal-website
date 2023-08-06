/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales: ["en","de","tr"],
    defaultLocale: 'tr',
  },
}

module.exports = nextConfig
