const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
    },
  },
};

const scssLoader = {
  test: /\.s[ac]ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "postcss-loader",
    "sass-loader",
  ],
};

const resolve = {
  extensions: [".js", ".jsx", ".ts", ".tsx"],
};

const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./src/server/server.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "server.js",
  },
  module: { rules: [babelLoader] },
  plugins: [
    new webpack.EntryOptionPlugin({
      PORT: 3000,
    }),
  ],
  resolve: resolve,
};

const clientConfig = {
  target: "web",
  mode: "development",
  entry: "./src/client/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "client.js",
  },
  module: {
    rules: [babelLoader, scssLoader],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/client/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
};

module.exports = [clientConfig, serverConfig];
