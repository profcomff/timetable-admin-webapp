const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
  transpileDependencies: true,
  devServer: { headers: { 'Access-Control-Allow-Origin': '*' } }
})
