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
  // exprContextCritical: false  // supposed to get rid of the warning, but actually provokes an error !
};

/* On build we get a WARNING: Critical dependency: the request of a dependency is an expression
   
   If you enable 'express' in externals[], this warning disappears, however only the /src appears in the output
   Which is no good, as it doesn't require express...
   
   Otherwise, we get a complete js build in /server/index.js (about 544 KB)

*/
