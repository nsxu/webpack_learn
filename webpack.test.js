const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./test/index.js",
  output: {
    filename: "js/[name].[contenthash].js",
    path: resolve(__dirname, "dist"),
  },
  module: {
   
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({ template: "./test/index.html" }),
  ],
  mode: "development",
  externals: {
    lodash: "lodash"
  }
};
