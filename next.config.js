/** @type {import('next').NextConfig} */
module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/showcase',
        permanent: true
      }
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com']
  },
  experimental: {
    appDir: true
  }
}
