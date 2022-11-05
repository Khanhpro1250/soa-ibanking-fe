const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');
dotenv.config();
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `http://${process.env.REACT_APP_PROXY_API_HOST}:${process.env.REACT_APP_PROXY_API_PORT}`,
            changeOrigin: true,
        }),
    );
};
