
export function random (req, res) {
    const random = Math.random();
    console.log('RANDOM',random,req.query);
    if (req.query.foo) {
        throw(new Error('You said foo'));
    }
    const T = new AThing();
    res.send({ random, reqQuery: req.query, ...T.getv() });
}

class AThing {

    constructor () {
        this.When = Date.now();
    }

    getv () {
        return { when: this.When };
    }

}
