const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');
dotenv.config();
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `https://${process.env.REACT_APP_PROXY_API_HOST}`,
            changeOrigin: true,
        }),
    );
};
