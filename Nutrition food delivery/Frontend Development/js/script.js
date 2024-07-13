// script.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);

        // Clear the form fields
        contactForm.reset();

        alert('Thank you for your message!');
    });
});
