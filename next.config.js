const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  pwa: {
    register: true,
    mode: 'production',
    disable: process.env.NODE_ENV !== 'production',
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'img-mobile.rubias19.com', 'rickandmortyapi.com', 'ar.celulares.com', 'images.philips.com'],
  },
});
