/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
        ],
    },
    output: 'export',
    // Removed problematic experimental features
    experimental: {
        scrollRestoration: true,
    },
}

module.exports = nextConfig 