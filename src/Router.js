
const Route = require('./Route');
const Listener = require('./Listener');

function Router ({ root, hash, platform, global }) {
    this.routes = [];
    this.root = root;
    this.hash = hash;
    this.platform = platform;
    this.global = global;
    this.listener = new Listener(this);
}

Router.prototype.initialize = function () {
    if (this.platform == 'browser') {
        this.global.location.hash = `${this.hash}`
    }

    this.configure();
    this.onChange();
}

Router.prototype.add = function (route = {}) {
    this.routes.push(route);
}

Router.prototype.configure = function () {
    this.routes = this.routes.map(route => {
        const _route = Route(route);
        this.listener.add(_route.name, _route.callback);
        return _route;
    });
}

Router.prototype.onChange = function () {
    this.listener.listen();
}

module.exports = Router;
