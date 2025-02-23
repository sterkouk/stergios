document.addEventListener('DOMContentLoaded', function() {
    const timelineSection = document.getElementById('timeline-section');

    function checkTimelineVisibility() {
        if (!timelineSection) return; // Exit if timeline doesn't exist

        const rect = timelineSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && !timelineSection.classList.contains('fade-in')) {
            timelineSection.classList.add('fade-in');
        }
    }

    // Check visibility on scroll
    window.addEventListener('scroll', checkTimelineVisibility);

    // Check visibility on initial load
    checkTimelineVisibility();

    // Learn More button functionality
    const learnMoreButton = document.querySelector('.actions .button.big');
    const aboutSection = document.getElementById('about');

    if (learnMoreButton && aboutSection) {
        learnMoreButton.addEventListener('click', function(event) {
            event.preventDefault();
            aboutSection.scrollIntoView({
                behavior: 'smooth'
            });
            // check for visibility, in case it is not already visible.
            checkTimelineVisibility();
        });
    }
});