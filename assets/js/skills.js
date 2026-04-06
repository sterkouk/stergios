document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('.typing-title');
    if (!el) return;

    var text = el.textContent.trim();
    el.textContent = '';
    el.classList.add('typing-active');

    var i = 0;
    var deleting = false;
    var pauseAfterType = 1800;
    var pauseAfterDelete = 500;
    var typeSpeed = 80;
    var deleteSpeed = 45;

    function tick() {
        if (!deleting) {
            el.textContent = text.slice(0, i + 1);
            i++;
            if (i === text.length) {
                deleting = true;
                setTimeout(tick, pauseAfterType);
            } else {
                setTimeout(tick, typeSpeed);
            }
        } else {
            el.textContent = text.slice(0, i - 1);
            i--;
            if (i === 0) {
                deleting = false;
                setTimeout(tick, pauseAfterDelete);
            } else {
                setTimeout(tick, deleteSpeed);
            }
        }
    }

    setTimeout(tick, 400);
});
