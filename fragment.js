
(function(global) {
    'use strict';
    var onHashChangeListener = global.onhashchange;
    var location = global.location || {};

    function noop () {}

    function Fragment (root, useHash) {
        this.root = root || '/';
        this.useHash = useHash ? useHash : true;
        this.hashTarget = '#!' + this.root;
        this.matchers = { '/': noop };
    }

    var methods = Fragment.prototype;

    methods.listen = function (fragment, listener) {
        this.matchers[fragment] = listener;
        return this;
    };

    methods.initialize = function () {
        var self = this;
        location.hash = this.hashTarget;

        global.onhashchange = function (event) {
            self.matchers[location.hash.slice(2)]();
        };
    };

    if (typeof global != undefined) {
        global.Fragment = Fragment;
    }
})(window)

