
export function random (req, res) {
    const random = Math.random();
    console.log('RANDOM',random,req.query);
    if (req.query.foo) {
        throw(new Error('You said foo'));
    }
    res.send({ random, reqQuery: req.query, hello: Date.now() });
}
