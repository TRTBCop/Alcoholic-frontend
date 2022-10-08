const path = require('path');

module.exports = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components')],
  },
  webpack(config) {
    config.resolve = {
      alias: {
        '@api': path.resolve(__dirname, './api'),
        '@layouts': path.resolve(__dirname, './layouts'),
        '@lib': path.resolve(__dirname, './lib'),
        '@hooks': path.resolve(__dirname, './hooks'),
        '@styles': path.resolve(__dirname, './styles'),
        types: path.resolve(__dirname, './types'),
        '@components': path.resolve(__dirname, './components'),
        '@containers': path.resolve(__dirname, './containers'),
        '@plugins': path.resolve(__dirname, './plugins'),
      },
      ...config.resolve,
    };
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
