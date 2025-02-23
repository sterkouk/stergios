window.addEventListener('load', function () {
    const heroSection = document.querySelector('#hero');
    const heroBackground = document.querySelector('.hero-background');

    // Function to check if the Hero section is in view
    function checkHeroVisibility() {
        if (!heroSection) return; // Exit if hero section doesn't exist

        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        // If the hero section is visible and the background doesn't have the fade-in class, add it
        if (isVisible && !heroBackground.classList.contains('fade-in')) {
            heroBackground.classList.add('fade-in');
        }
    }

    // Check visibility when the page is loaded
    checkHeroVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkHeroVisibility);
});
