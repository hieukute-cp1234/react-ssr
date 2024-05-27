const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const babelLoader = {
  rules: [
    {
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
    },
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
  module: babelLoader,
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
  module: babelLoader,
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/client/index.html`,
    }),
  ],
  resolve: resolve,
};

module.exports = [clientConfig, serverConfig];
