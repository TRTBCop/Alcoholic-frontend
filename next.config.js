const path = require('path');

module.exports = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
    FB_API_KEY: process.env.FB_API_KEY,
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
    FB_APP_ID: process.env.FB_APP_ID,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components')],
  },
  images: {
    loader: 'imgix',
    path: 'https://alcoholic-1004.web.app/', // 배포 경로
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
