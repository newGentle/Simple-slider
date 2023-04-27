const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


module.exports = {

    entry: path.join(__dirname, "src", "index.ts"),
    output: {
      filename: "main.js",
      clean: true,
      assetModuleFilename: 'img/[name][ext]'
    },
    stats: {
      children: false,
    },
    performance: {
      maxAssetSize: 1000000,
    },
    experiments: {
      topLevelAwait: true
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
        extensions: ['css', 'scss', 'sass'],
        files: path.join(__dirname, "dist", "main.css"),
        fix: true,
      }),
    ],

    optimization: {
      minimizer: [
        new TerserJSPlugin([]), 
        new OptimizeCSSAssetsPlugin({}),
        new ImageMinimizerPlugin({
          loader: false,
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ["optipng", { optimization: 5 }]
              ]
            }
          }
        })
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
            "sass-loader",
            
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
          type: 'asset/resource',
        }
      ],
    },
};
