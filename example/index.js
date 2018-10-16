
(function() {
    var fragment = new Fragment();
    var target = document.getElementById('target');

    fragment.listen('/a', function () {
        console.log('a hash page');
        target.innerHTML = 'I am a page;'
    });

    fragment.listen('/b', function () {
        console.log('b hash page');
        target.innerHTML = 'I am b page;'
    });

    fragment.initialize();
})()
