// Wait for the page to load
window.addEventListener('load', function () {
    const heroSection = document.querySelector('#hero');
    const heroContent = document.querySelector('.hero-content');

    // Function to check if the Hero section is in view
    function checkHeroVisibility() {
        if (!heroSection) return; // Exit if hero section doesn't exist

        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        // If the hero section is visible and it doesn't have the fade-in class, add it
        if (isVisible && !heroContent.classList.contains('fade-in')) {
            heroContent.classList.add('fade-in');
        }
    }

    // Check visibility when the page is loaded
    checkHeroVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkHeroVisibility);
});
