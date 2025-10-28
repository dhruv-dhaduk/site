import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    typedRoutes: true,
    cacheComponents: true,
    turbopack: {
        rules: {
            '*.mdx': {
                loaders: ['raw-loader'],
                as: '*.js',
            },
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '8diytvqkng.ufs.sh',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
