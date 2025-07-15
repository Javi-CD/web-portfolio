/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/devicons/devicon/**',
      },
      {
        protocol: 'https',
        hostname: 'pnpm.io',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'turbo.build',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'discord.js.org',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'rollupjs.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'astro.build',
        port: '',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
        pathname: '/logopedia/**',
      },
    ],
  },
};

export default nextConfig;
