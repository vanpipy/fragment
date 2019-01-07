
function Listener ({ root, platform, hash, useHash, routes, global }) {
    this.listeners = {};
    this.root = root;
    this.platform = platform;
    this.hash = hash;
    this.useHash = useHash;
    this.routes = routes;
    this.global = global;
}

Listener.prototype.listen = function () {
    try {
        this.global.onhashchange = (HashChangeEvent) => {
            const { target, newURL } = HashChangeEvent;
            const [ url, hash ] = newURL.split(this.hash);
            this.trigger(hash);
        }
    } catch (e) {
        /* handle error */
    }
}

Listener.prototype.add = function (name, callback) {
    this.listeners[`${this.root}${name}`] = callback;
}

Listener.prototype.trigger = function (name) {
    this.listeners[name].apply(this);
}

module.exports = Listener;
