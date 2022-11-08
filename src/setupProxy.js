const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'https://ibanking-soa.herokuapp.com',
            changeOrigin: true,
        }),
    );
};
