const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {  publicPath: process.env.NODE_ENV === "production" ? "mamocreative" : "/",};

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  }
};