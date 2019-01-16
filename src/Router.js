
const Route = require('./Route');
const Listener = require('./Listener');

function Router ({ splitter, hash, platform, global }) {
    this.routes = [];
    this.splitter = splitter;
    this.hash = hash;
    this.platform = platform;
    this.global = global;
    this.listener = new Listener(this);
}

Router.prototype.initialize = function () {
    if (this.platform == 'browser') {
        this.global.location.hash = `${this.hash}${this.splitter}`
    }

    this.configure();
    this.onChange();
}

Router.prototype.add = function (route = {}) {
    this.routes.push(route);
}

Router.prototype.configure = function () {
    const splitter = this.splitter;

    this.routes = this.routes.map(route => {
        const _route = new Route({ ...route, splitter });
        this.listener.add(_route);
        return _route;
    });
}

Router.prototype.onChange = function () {
    this.listener.listen();
}

Router.prototype.routable = function () {
    //TODO: for server side mappings.
}

module.exports = Router;
