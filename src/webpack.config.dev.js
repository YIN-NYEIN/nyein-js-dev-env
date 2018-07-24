const path = require ('path');


 module.exports= {
  mode: 'production',
  bail: true,
  devtool: 'inline-source-map',
  cache: false,
  entry: [
   path.resolve(__dirname, './index.js')

  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use:[ {loader: 'babel-loader'}],

        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}
