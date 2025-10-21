import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    typedRoutes: true,
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
