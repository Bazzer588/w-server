import express from 'express';
import { random } from './random';

const app = express();

app.get('/time', (req, res) => {
    const date = new Date();
    console.log('GETTIME',date);
    const spreadThis = {age: 38, note: 'here be some text...'};
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate'); // IE11 needs this
    res.send({date, ...spreadThis});
});

app.get('/random', random );

const port = 8999;

app.listen(port, () => {
    console.log('Find ES6 server at: http://localhost:'+port,
        'cwd:',process.cwd(),
        '__dirname:',__dirname); // eslint-disable-line no-console
});
