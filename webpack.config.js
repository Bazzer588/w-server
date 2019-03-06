const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'server')
  },
  externals: [
    // 'express' // see note on Critical dependency: the request of a dependency is an expression
  ]
  // exprContextCritical: false
};

/*
   Critical dependency: the request of a dependency is an expression

*/