const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  entry: "./src/index1.js",
  output: {
    filename: "js/build.js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      /**
       * js兼容性处理
       *  @babel/preset-env：只能处理语法, 新的api不行（例如: Promise）
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // 语法检查
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: false,
          failOnError: true, // eslint报错时让build出错
        },
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',  // 将css 打包到js中
          MiniCssExtractPlugin.loader, // 将css打包到单独文件
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        // 只能处理css文件中引入的图片，处理不了<img src="">
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader", // 需要同时安装: file-loader, url-loader
        options: {
          // 小于 8k图片, 才会被base64处理
          limit: 8 * 1024,
          name: "[hash:10].[ext]",
          outputPath: "img",
        },
      },
      {
        // 加载： <img src="./img/1.png" alt="1.png">
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        // 加载iconfont字体文件
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "assets",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin({ filename: "main.css" }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  mode: "development",
  // 只会在内存中编译打包, 不会向本地输出代码
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    compress: true,
    port: 10000,
    open: true,
  },
};
