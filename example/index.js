
(function() {
    var fragment = new Fragment();

    fragment.listen('/a', function () {
        console.log('a hash page');
    });

    fragment.listen('/b', function () {
        console.log('b hash page');
    });

    fragment.initialize();
})()
