function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length < 6 || password.length < 6) {
        alert('Username and password must be at least 6 characters long.');
        return false;
    }

    return true;
}

function validateRegistration() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const nameRegex = /^[a-zA-Z\s]{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(name)) {
        alert('Name should be at least 6 characters long and contain only alphabets.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert('Phone number must contain exactly 10 digits.');
        return false;
    }

    return true;
}

