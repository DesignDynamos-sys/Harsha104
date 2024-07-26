// signup.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Gather form data
    const formData = {
        "fields": {
            "Full Name": document.getElementById('fullName').value,
            "Email": document.getElementById('email').value,
            "Date of Birth": document.getElementById('dob').value,
            "Student ID": document.getElementById('studentId').value,
            "Department": document.getElementById('department').value,
            "Gender": document.getElementById('gender').value,
            "Address": document.getElementById('address').value,
            "Phone Number": document.getElementById('phoneNumber').value,
            "Guardian\'s Name": document.getElementById('guardianName').value,
            "Guardian\'s Phone": document.getElementById('guardianPhone').value,
            "Password": document.getElementById('password').value
        }
    };

    // Send data to Airtable
    fetch('https://api.airtable.com/v0/appiXTQ3JaOFr0QIN/Users', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer path7SZ2aOBu6VRMq.10ad50bcd7fe6ba630733fcb8611c798d08297f2e07a02fa796ed38a60538c96',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.location.href = 'index.html'; // Redirect to index page after successful registration
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
