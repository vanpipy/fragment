
const expect = require('chai').expect;
const Fragment = require('../src/Fragment');

describe('Fragment', () => {
    it('should be initialized and configured with the default options successfully', () => {
        const fragment = new Fragment();
        expect(fragment.root).to.equal('/');
        expect(fragment.hash).to.equal('#!');
        expect(fragment.useHash).to.equal(true);
        expect(fragment.platform).to.equal('browser');
        expect(typeof fragment.noop).to.equal('function');
        expect(typeof fragment.router).to.equal('object');
    });

    it('should add route successfully', () => {
        const fragment = new Fragment();
        const routeA = { name: 'a', listen: () => {} };
        const routeB = { name: 'b', listen: () => {} };
        fragment.router.add(routeA);
        expect(JSON.stringify(fragment.router.routes[0])).to.equal(JSON.stringify(routeA));
        expect(fragment.router.routes.length).to.equal(1);
        fragment.router.add(routeB);
        expect(JSON.stringify(fragment.router.routes[1])).to.equal(JSON.stringify(routeB));
        expect(fragment.router.routes.length).to.equal(2);
    });
});
