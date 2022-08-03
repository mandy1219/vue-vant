module.exports = {
    // devServer: {
    //   host: 'local.seiue.com',
    //   port: 8080
    // },
    devServer: { disableHostCheck: true },
    publicPath:'/app',
    runtimeCompiler: true,
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              // 直接覆盖变量(这里不需要@符号)
              'blue': '#477CFF',
              // 'border-color': '#eee',
              // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
              hack: `true`,
            },
          },
        },
      },
    },
  };