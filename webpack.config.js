const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: path.join(__dirname, "src", "index.js"),
    devServer: {
      static: path.join(__dirname, "dist"),
      port: 8001,
    },
    output: {
      filename: "main.js",
    },
    devtool: "inline-source-map",
    stats: {
      children: false,
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "Practice",
        template: path.join(__dirname, "src", "pug", "index.pug"),
        scriptLoading: "blocking",
      }),
      new MiniCssExtractPlugin(),
      new ESLintPlugin({
        extensions: "ts",
      }),
      new StylelintPlugin({
        extensions: ["css"],
        files: path.join(__dirname, "dist", "main.css"),
        fix: true,
      }),
    ],

    optimization: {
      minimizer: [
        new TerserJSPlugin([]), 
        new OptimizeCSSAssetsPlugin({}),
      ],
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
              },
            },
            "css-loader",
          ],
        },
        {
          test: /\.pug$/,
          loader: "pug-loader",
          options: {
            pretty: true,
          },
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
          exclude: /node-modules/,
        },
      ],
    },
};
