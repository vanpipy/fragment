
/**
 * @example
 * { name: 'A', path: '/a', callback: <Function> } standard
 * { parent: 'A', name: 'B', path: '/b', callback: <Function> } optional
 * { parent: 'A', name: 'A.B', path: '/a/b', callback: <Function> } optional -> standard
 */
function Route ({ parent, name, path, callback, splitter }) {
    this.splitter = splitter;

    Object.defineProperty(this, 'parent', {
        value: parent,
        writable: false,
    });

    Object.defineProperty(this, 'name', {
        value: name,
        writable: false,
    });

    Object.defineProperty(this, 'path', {
        value: path,
        writable: false,
    });

    Object.defineProperty(this, 'callback', {
        value: callback,
        writable: false,
    });
}

Route.prototype.enter = function () {
    console.log('enter: ', this.name);
}

Route.prototype.leave = function () {
    console.log('leave: ', this.name);
}

Route.prototype.convertToStd = function () {
    if (this.parent && this.parent != this.name) {

    }
}

module.exports = Route;
