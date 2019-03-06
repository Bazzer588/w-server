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
   
   If you enable 'express' in internals, this warning disappears, however only the /src appears in the output
   
   Otherwise, we get a complete js build in /server/index.js (about 544 KB)

*/
