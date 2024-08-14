// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
        });
    });
});

// Scroll Animation for "Back to Top" Button
document.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');

    if (window.scrollY > 500) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth Scrolling for Back to Top Button
document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Simple Form Validation
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // Example: Send data to server or service here
    } else {
        alert('Please fill out all fields.');
    }
});
