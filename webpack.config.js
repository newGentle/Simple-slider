const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const ImageMinPlugin = require("imagemin-webpack");


module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      filename: "main.js",
      // assetModuleFilename: 'img/[name][ext]',
      clean: true
    },
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
      new ImageMinPlugin({
        bail: false,
        // Cache: true,
        name: "img/[name].[ext]",
        imageminOptions: {
          plugins: [
            ["optipng", { optimizationLevel: 5 }]
          ]
        }
      })
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
          test: /\.(css|sass|scss)$/,
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
        {
          test: /\.(png|jp?g|gif|svg)$/i,
          type: 'asset/resource'
        }
      ],
    },
};
