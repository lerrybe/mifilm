const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/v1', {
      target: 'https://openapi.naver.com/',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/v3', {
      target: 'https://www.googleapis.com/youtube/',
      changeOrigin: true,
    }),
  );
};