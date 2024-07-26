// Add event listener to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (could be extended)
    if (email && password) {
        // Ideally, you would send this data to your server here

        // Redirect to the index page (or wherever you need)
        window.location.href = 'index.html';
    } else {
        alert('Please fill in both fields.');
    }
});
