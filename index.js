(function () {
    const topBar = document.createElement('div');

    topBar.id = 'custom-topbar';

    Object.assign(topBar.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '96px',
        backgroundColor: '#000000',
        zIndex: '1000',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box'
    });

    document.body.appendChild(topBar);
})();
