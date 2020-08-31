const config = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  const baseUrl = '';
  config.publicPath = '';
  config.indexPath = './index.html';
  config.assetsDir = './hotkey_static';
  config.productionSourceMap = false;
}
module.exports = config;
