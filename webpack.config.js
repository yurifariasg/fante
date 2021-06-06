const { join } = require('path')
const slsw = require('serverless-webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /.*\/node_modules\/.*/,
        options: { transpileOnly: true },
      },
    ],
  },
  devtool: slsw.lib.webpack.isLocal
    ? 'inline-cheap-module-source-map'
    : 'nosources-source-map',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: join(__dirname, '.webpack'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  externals: {
    'aws-sdk': 'aws-sdk',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './src/email-templates/**/*.html',
          to: './src/email-templates',
        },
      ],
    }),
  ],
}
