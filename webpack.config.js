const path = require('path')
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    padth: path.resolve(__dirname,'dist')
  },
  module:{
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader',
      }
    ]
  }
}