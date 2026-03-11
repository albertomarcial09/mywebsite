document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Add any interactive features here
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        console.log('Header clicked');
    });
});