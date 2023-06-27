document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // חישוב התרחשות האירוע לא יוביל לרענון הדף

    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirm-password');

    // בדיקת תקינות שם משתמש
    var username = usernameInput.value;
    if (!username || username.trim() === '') {
        showError('username', 'Username is required');
    } else {
        hideError('username');
    }

    // בדיקת תקינות כתובת דוא"ל
    var email = emailInput.value;
    if (!email || email.trim() === '') {
        showError('email', 'Email is required');
    } else if (!validateEmail(email)) {
        showError('email', 'Invalid email format');
    } else {
        hideError('email');
    }

    // בדיקת תקינות סיסמה
    var password = passwordInput.value;
    if (!password || password.trim() === '') {
        showError('password', 'Password is required');
    } else if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters long');
    } else {
        hideError('password');
    }

    // בדיקת התאמת סיסמה
    var confirmPassword = confirmPasswordInput.value;
    if (!confirmPassword || confirmPassword.trim() === '') {
        showError('confirm-password', 'Confirm Password is required');
    } else if (confirmPassword !== password) {
        showError('confirm-password', 'Passwords do not match');
    } else {
        hideError('confirm-password');
    }
});

function showError(inputId, message) {
    var errorElement = document.getElementById(inputId + '-error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(inputId) {
    var errorElement = document.getElementById(inputId + '-error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
