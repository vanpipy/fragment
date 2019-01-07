var Fragment = (function () {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function Route ({ name, callback }) {
	    let RDT = Object.create(null);

	    Object.defineProperty(RDT, 'name', {
	        value: name,
	        writable: false,
	    });

	    Object.defineProperty(RDT, 'callback', {
	        value: callback,
	        writable: false,
	    });

	    return RDT;
	}

	var Route_1 = Route;

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
	        };
	    } catch (e) {
	        /* handle error */
	    }
	};

	Listener.prototype.add = function (name, callback) {
	    this.listeners[`${this.root}${name}`] = callback;
	};

	Listener.prototype.trigger = function (name) {
	    this.listeners[name].apply(this);
	};

	var Listener_1 = Listener;

	function Router ({ root, hash, platform, global }) {
	    this.routes = [];
	    this.root = root;
	    this.hash = hash;
	    this.platform = platform;
	    this.global = global;
	    this.listener = new Listener_1(this);
	}

	Router.prototype.initialize = function () {
	    if (this.platform == 'browser') {
	        this.global.location.hash = `${this.hash}`;
	    }

	    this.configure();
	    this.onChange();
	};

	Router.prototype.add = function (route = {}) {
	    this.routes.push(route);
	};

	Router.prototype.configure = function () {
	    this.routes = this.routes.map(route => {
	        const _route = Route_1(route);
	        this.listener.add(_route.name, _route.callback);
	        return _route;
	    });
	};

	Router.prototype.onChange = function () {
	    this.listener.listen();
	};

	var Router_1 = Router;

	//const promise = require('promise');


	function noop () {}

	function Fragment (options) {
	    const env = this;

	    Object.assign(env, {
	        root: '/',
	        hash: '#!',
	        useHash: true,
	        platform: 'browser',
	        noop,
	    }, options);

	    this.global = this.platform == 'browser' ? commonjsGlobal : 0;
	    this.router = new Router_1(env);
	}

	Fragment.prototype.init = function () {
	    this.router.initialize();
	};

	var Fragment_1 = Fragment;

	return Fragment_1;

}());
