
(function() {
    var fragment = new Fragment();

    fragment.router.add({
        name: 'A',
        path: '/a',
        callback: () => {
            console.log('Im A module');
        }
    });

    fragment.init();
})()
