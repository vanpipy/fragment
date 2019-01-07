
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

module.exports = Route;
