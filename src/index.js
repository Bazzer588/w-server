import 'source-map-support/register';
import express from 'express';
import bodyParser from 'body-parser';
import {random} from './random';
// import { wizard } from '$MAGIC';
import {wizard} from './magic';
import dataInjector, {getRequestQuote} from "./dataInjector";

const magic = require('./' + MAGIC_DEFINE).default; // hard coded in webpack.config.js

const app = express();
const jsonParser = bodyParser.json();

app.get('/time', (req, res) => {
    const date = new Date();
    console.log('GETTIME', date);
    const spreadThis = {date, age: 38, note: 'here be some text...'};
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate'); // IE11 needs this
    res.send({...req.query, ...spreadThis});
});

app.get('/random', random);
app.get('/magic', magic);
app.get('/wizard', wizard);

app.post('/inject-data', jsonParser, dataInjector);
app.get('/quote', getRequestQuote);

app.use('/', (req, res, next) => {
    // logReq(path+' STATIC', req);
    express.static('./public', {maxAge: 10000})(req, res, next);
});

// start listening

const port = 8999;

app.listen(port, () => {
    console.log('Find ES6 server at: http://localhost:' + port,
        'cwd:', process.cwd(),
        '__dirname:', __dirname); // eslint-disable-line no-console
});
