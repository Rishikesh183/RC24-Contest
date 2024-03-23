document.getElementById('customForm').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var Age = document.getElementById('Age').value.trim();
    var phone = document.getElementById('phone').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '' || Age === '' || phone === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
    }
    if (Age > 50) {
        alert("Rama Krishna ane age lo aatalu entayya");
        event.preventDefault();
    }
});

document.getElementById('customForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);
            const jsonData = {};
            formData.forEach((value, key) => {
                jsonData[key] = value;
            });

            fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            })
            .then(response => response.json())
            .then(data => {
                // Handle response data
                console.log(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error submitting form:', error);
            });
        });