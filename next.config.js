/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'graph.facebook.com',
            },
            {
                protocol: 'https',
                hostname: 'scontent.xx.fbcdn.net',
            }
        ],
    },
    // Removed problematic experimental features
    experimental: {
        scrollRestoration: true,
    },
}

module.exports = nextConfig 