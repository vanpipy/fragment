
const promise = require('promise');

function Listener ({ splitter, platform, hash, useHash, routes, global }) {
    this.currentStatus = null;
    this.listeners = {};
    this.splitter = splitter;
    this.platform = platform;
    this.hash = hash;
    this.useHash = useHash;
    this.routes = routes;
    this.global = global;
}

Listener.prototype.listen = function () {
    this.global.onhashchange = (HashChangeEvent) => {
        const { target, newURL } = HashChangeEvent;
        const [ url, hash ] = newURL.split(this.hash);
        this.dispatch(hash);
    }
}

Listener.prototype.add = function (route) {
    const key = route.name;
    this.listeners[key] = route;
}

Listener.prototype.dispatch = function (key) {
    try {
        const route = this.listeners[key];
        const enterEvent = route.enter;
        const callbackEvent = route.callback;
        const leaveEvent = route.leave;

        new promise((resolve) => resolve(enterEvent()))
            .then((res) => callbackEvent())
            .then((res) => leaveEvent())
    } catch (e) {
        throw `Need a function to trigger\n ${e}.`;
    }
}

module.exports = Listener;
