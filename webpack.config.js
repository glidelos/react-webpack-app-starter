const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack')
module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    port:8080
  },
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        //include: path.resolve(__dirname,'/src/assets/images'),
        use: [
          {
            loader: `file-loader`,
            options: {
              name:'[name].[ext]',
            }
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname+ "/src/index.html",
      filename: "index.html",
      title:'React Start'
    }),
    new SassLintPlugin(),
  ]
}