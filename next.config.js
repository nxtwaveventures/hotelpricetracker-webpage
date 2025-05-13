/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com'], // Add any image domains you'll use
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
        ],
    },
    // Removed problematic experimental features
    experimental: {
        scrollRestoration: true,
    },
}

module.exports = nextConfig 