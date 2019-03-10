
const FOO_BAR = process.env.FOO_BAR;   // injected at run time, ie set FOO_BAR=1234567 && node server
const WOOT = process.env.WOOT;         // injected at build time by plugin
const NODE_ENV = process.env.NODE_ENV; // injected at build

export const random = (req, res) => {
    const random = Math.random();
    console.log('RANDOM',random,req.query,'FOO_BAR',FOO_BAR,'MAGIC',MAGIC_DEFINE,'WOOT',WOOT);
    if (req.query.foo) {
        throw(new Error('You said foo'));
    }
    const T = new AThing(80837);
    res.send({ random, reqQuery: req.query, ...T.getv(), FOO_BAR, NODE_ENV });
};

// example class

class AThing {

    constructor (v) {
        this.v = v;
        this.When = Date.now();
    }

    getv () {
        return { when: this.When, v: this.v };
    }

}
