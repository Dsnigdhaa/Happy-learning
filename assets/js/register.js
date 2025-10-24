document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (!registerForm) return;

    const showPasswordCheckbox = document.getElementById('showRegPassword');
    const passwordInput = document.getElementById('regPassword');
    const errorDiv = document.getElementById('regErrorMessage');

    togglePassword(showPasswordCheckbox, passwordInput);

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        hideError(errorDiv);

        const username = document.getElementById('regUsername').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = passwordInput.value.trim();

        if (!username || !email || !password) {
            showError(errorDiv, 'Please fill in all fields');
            return;
        }

        // Get existing admins or initialize empty array
        const admins = JSON.parse(localStorage.getItem('admins') || '[]');

        // Check if username already exists
        const usernameExists = admins.some(admin => admin.username.toLowerCase() === username.toLowerCase());
        if (usernameExists) {
            showError(errorDiv, 'Username already exists. Please choose a different username.');
            return;
        }

        // Add new admin
        admins.push({username, email, password});
        localStorage.setItem('admins', JSON.stringify(admins));

        alert('Account created successfully!');
        window.location.href = 'login.html';
    });
});
