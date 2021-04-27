require('dotenv/config');
const path = require('path');

const clientPath = path.resolve(__dirname, 'app');
const publicPath = path.resolve(__dirname, 'server/public');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: clientPath,
  output: {
    path: publicPath
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: publicPath,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': `http://localhost:8080`
    },
    stats: 'minimal',
    watchContentBase: true
  }
}
