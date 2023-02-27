const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
    '/data',
    createProxyMiddleware({
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
    })
    );
};
