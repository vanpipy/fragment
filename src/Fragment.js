
//const promise = require('promise');
const Router = require('./Router');

function noop () {}

function Fragment (options) {
    const env = this;

    Object.assign(env, {
        root: '/',
        hash: '#!',
        useHash: true,
        platform: 'browser',
        splitter:  '/',
        noop,
    }, options);

    this.global = this.platform == 'browser' ? global : 0;
    this.router = new Router(env);
}

Fragment.prototype.init = function () {
    this.router.initialize();
}

module.exports = Fragment;
