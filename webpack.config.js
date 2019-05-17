/**
 * Created by igoreznik on 25/03/2019.
 */
const path = require('path');
module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,'dist')
  },
  devServer: {
    contentBase:'./dist'
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        //use:[
        //  'style-loader',
        //  'css-loader'
        //]
        use: [{ loader: 'style-loader/url' }, { loader: 'file-loader' }],
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          {loader:'file-loader'}
        ]
      }
    ]
  }
};
