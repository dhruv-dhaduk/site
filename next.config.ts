import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '/dhruv-dhaduk/vault/**',
            },
            {
                protocol: 'https',
                hostname: '8diytvqkng.ufs.sh',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
