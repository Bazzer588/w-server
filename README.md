### A simple express server built with webpack 4

npm run build

node server

Go to http://localhost:8999/time or http://localhost:8999/random to see it working

### So what?

It turns ES6 into code that node will run, apparently without needing babel...

The resulting file /server/index.js can be run stand-alone without needing all the node modules installed, which could be handy for quick deployment

Tested with node v9.3.0 and npm 5.5.1
