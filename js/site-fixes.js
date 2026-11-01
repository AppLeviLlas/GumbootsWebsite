// Keeps the mobile menu button's state in sync for screen readers, and lets Escape close the menu.
// Each page's own script toggles the "open" class; this only mirrors it.

(function () {
    var button = document.getElementById('navToggler');
    var menu = document.getElementById('navLinks');
    if (!button || !menu) return;

    function sync() {
        button.setAttribute('aria-expanded', String(menu.classList.contains('open')));
    }

    new MutationObserver(sync).observe(menu, { attributes: true, attributeFilter: ['class'] });
    sync();

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menu.classList.contains('open')) {
            menu.classList.remove('open');
            button.focus();
        }
    });
})();
