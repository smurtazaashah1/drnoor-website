import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 3600,
  },
  compress: true,
  poweredByHeader: false,
  compiler: {
    // Remove React DevTools in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
    // Remove console logs in production (except errors)
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error'],
          }
        : false,
  },
  webpack: (config, { isServer }) => {
    // Enhanced optimization for both client and server
    config.optimization = {
      ...config.optimization,
      // Enable tree shaking
      usedExports: true,
      sideEffects: false,
      // Better minification
      minimize: true,
    };

    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\/]node_modules[\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
          },
          swiper: {
            test: /[\/]node_modules[\/]swiper[\/]/,
            name: 'swiper',
            chunks: 'all',
            priority: 20,
            reuseExistingChunk: true,
          },
          react: {
            test: /[\/]node_modules[\/](react|react-dom)[\/]/,
            name: 'react',
            chunks: 'all',
            priority: 15,
            reuseExistingChunk: true,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      };
    }

    // Optimize module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      // Ensure single instance of React
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };

    return config;
  },
  experimental: {
    esmExternals: true,
  },
  serverExternalPackages: ['swiper'],
};

export default nextConfig;
