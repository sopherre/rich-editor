const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/route/index.tsx",
  output: {
    path: `${__dirname}/dist/dev`,
    filename: "main.js"
  },
  devtool: "eval-source-map",
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader" }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    open: true,
    port: 3100,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    })
  ]
};
