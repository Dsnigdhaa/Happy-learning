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

        localStorage.setItem('newUser', JSON.stringify({username, email, password}));
        alert('Account created successfully!');
        window.location.href = 'login.html';
    });
});
