/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    basePath: '',
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',  // Allows only HTTPS
                hostname: '**',     // Allows any hostname
                port: '',           // No restriction on port
                pathname: '/**',    // Allows any path
            },
            {
                protocol: 'http',   // Allows only HTTP
                hostname: '**',     // Allows any hostname
                port: '',           // No restriction on port
                pathname: '/**',    // Allows any path
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
