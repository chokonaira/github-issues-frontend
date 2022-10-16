// vue.config.js
module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 3001,
    public: '0.0.0.0:3001',
  },
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/app.scss";',
      },
    },
  },
  runtimeCompiler: true,
  // NOTE: set alias via `configureWebpack` or `chainWebpack`
  configureWebpack: {
    resolve: {
      alias: {
        'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
        'balm-ui-css': 'balm-ui/dist/balm-ui.css',
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('supportChaining')
      .test(/\.js$/)
      .include
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .tap((options) => ({
        ...options,
        plugins: ['@babel/plugin-proposal-optional-chaining'],
      }));
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => /^x-/.test(tag),
        };
        return options;
      })
      .end();
  },
};
