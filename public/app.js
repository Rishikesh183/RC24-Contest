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
    if (Age > 75) {
        alert("Enter a right age");
        event.preventDefault();
    }
});