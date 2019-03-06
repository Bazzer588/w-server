### A simple express server built with webpack 4

npm run build

node server

Go to http://localhost:8999/time or http://localhost:8999/random to see it working

### So what?

It turns ES6 into code that node will run, apparently without needing babel...

The resulting file /server/index.js can be run stand-alone, which could be handy for quick deployment. Note this file is 544KB in size, but you don't need any node_modules (30MB at the moment, a lot of which is just dev dependencies).

Tested with node v9.3.0 and npm 5.5.1

### Source maps / error handling

http://localhost:8999/random?foo=something will trigger a deliberate server error, but the stack trace points at the webpacked /server/index.js file - needs work to have a proper stack trace for server side errors.

### lint, test, inspect etc

Of course these need adding - the objective here is to get a simpler build so /node_modules doesn't have to be deployed
