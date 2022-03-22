// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/v1',
//     createProxyMiddleware({
//       target: 'https://openapi.naver.com/',
//       changeOrigin: true,
//     }),
//   );
//   app.use(
//     '/v3',
//     createProxyMiddleware({
//       target: 'https://www.googleapis.com/youtube/',
//       changeOrigin: true,
//     }),
//   );
// };