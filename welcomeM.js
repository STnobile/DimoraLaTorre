document.addEventListener('DOMContentLoaded', function() {
    const message = document.querySelector('.welcome-message');
    const overlay = document.querySelector('.overlay'); // Select the overlay
    const navbar = document.querySelector('.navbar'); // Select your navbar

    // Ensure navbar is visible but disabled initially
    navbar.style.opacity = '0.5';  
    navbar.style.pointerEvents = 'none';

    // Check if the welcome message has been seen during this session
    if (sessionStorage.getItem('welcomeSeen')) {
        // If seen before, remove the welcome message and enable scrolling & navbar
        message.remove();
        overlay.remove(); // Remove the overlay
        document.body.style.overflow = 'auto';
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
        return;
    }

    // Lock scrolling on page load
    document.body.style.overflow = 'hidden';

    // Button click event to unlock scrolling and remove the welcome message & overlay
    document.querySelector('.enter-btn').addEventListener('click', function() {
        // Set sessionStorage key to prevent showing the welcome message again
        sessionStorage.setItem('welcomeSeen', 'true');

        // Fade-out effect
        message.style.transition = 'opacity 1s ease-in-out';
        overlay.style.transition = 'opacity 1s ease-in-out';
        message.style.opacity = 0;
        overlay.style.opacity = 0;

        setTimeout(() => {
            // Remove the welcome section & overlay from the DOM after fade-out
            message.remove();
            overlay.remove();

            // Unlock scrolling
            document.body.style.overflow = 'auto';

            // Enable navbar interactions
            navbar.style.opacity = '1';
            navbar.style.pointerEvents = 'auto';
        }, 1000);
    });
});