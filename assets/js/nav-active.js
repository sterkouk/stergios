document.addEventListener('DOMContentLoaded', function () {
    // Active nav highlight
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#menu a').forEach(function (link) {
        if (link.getAttribute('href') === path) {
            link.classList.add('nav-active');
        }
    });

    // Smooth fade-out on internal page navigation
    document.querySelectorAll('a[href]').forEach(function (link) {
        var href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('http')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.body.style.transition = 'opacity 0.3s ease';
                document.body.style.opacity = '0';
                setTimeout(function () {
                    window.location.href = href;
                }, 300);
            });
        }
    });
});
