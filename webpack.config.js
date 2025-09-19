
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const isDev = !isProd;

  return {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      chunkFilename: isProd ? 'js/[name].[contenthash:8].chunk.js' : 'js/[name].chunk.js',
      assetModuleFilename: 'assets/[name].[contenthash:8][ext][query]',
      publicPath: '/',
      clean: true,
    },

    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@theme': path.resolve(__dirname, 'src/theme'),
      },
    },

    module: {
      rules: [
        
        {
          test: /\.[jt]sx?$/,
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                ['@babel/preset-env', { targets: 'defaults', modules: false }],
                ['@babel/preset-react', { runtime: 'automatic' }],
                ['@babel/preset-typescript', { allowDeclareFields: true }],
              ],
              plugins: [
                isDev && require.resolve('react-refresh/babel'),
                ['babel-plugin-styled-components', {
                  displayName: isDev,
                  fileName: isDev,
                  pure: true,
                  minify: isProd,
                  transpileTemplateLiterals: isProd,
                }],
              ].filter(Boolean),
            },
          },
        },

        
        {
          test: /\.module\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:6]',
                },
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: { postcssOptions: { plugins: [require('autoprefixer')] } },
            },
          ],
        },

        
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: { postcssOptions: { plugins: [require('autoprefixer')] } },
            },
          ],
        },

        
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset',
          parser: { dataUrlCondition: { maxSize: 8 * 1024 } }, 
        },

        
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        
      }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
        }),
      new ForkTsCheckerWebpackPlugin(),
      isDev && new ReactRefreshWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      }),
    ].filter(Boolean),

    optimization: {
      splitChunks: { chunks: 'all' },
      runtimeChunk: 'single',
    },

    devServer: {
      static: { directory: path.resolve(__dirname, 'public') },
      historyApiFallback: true,
      hot: true,
      port: 3000,
      open: false,
      client: { overlay: true },
    },

    performance: { hints: false },
  };
};
